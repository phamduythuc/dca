import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DcaManagementService} from "../dca-management.service";

@Component({
  selector: 'app-add-dca',
  templateUrl: './add-dca.component.html',
  styleUrls: ['./add-dca.component.scss']
})
export class AddDcaComponent implements OnInit {
  dataResult: any;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddDcaComponent>, private dcaService: DcaManagementService) {
    this.dataResult = this.data?.data;
  }

  dataDca: any = [
    // {
    //   tokens: 200,
    //   price: 2,
    //   time: new Date().toDateString()
    // },
    // {
    //   tokens: 200,
    //   price: 2,
    //   time: new Date().toDateString()
    // }
  ]
  formGroup: FormGroup = this.fb.group({
    tokens_dca: [0, [Validators.required, Validators.min(0)]],
    price_current_dca: [0, [Validators.required, Validators.min(0)]]
  })
  averagePrice: number = 0

  ngOnInit(): void {
    this.getListDCA();
  }

  getListDCA() {
    this.dcaService.getDcaHistory(this.dataResult?.id).subscribe(res => {
      console.log(res)
      this.dataDca = res.map(item => {
        return {
          ...item,
          updateAt: new Date(item.updateAt).toLocaleString()
        }
      })
      this.averagePrice = this.calculateAveragePrice(this.dataDca)
    })
  }

  calculateAveragePrice(dcaList: any) {
    let totalCost = 0;       // Tổng chi phí
    let totalQuantity = 0;   // Tổng số lượng token

    // Duyệt qua danh sách các lần DCA để tính tổng chi phí và tổng số lượng token
    dcaList.forEach((entry: any) => {
      totalCost += entry.tokens_dca * entry.price_current_dca; // Tính tổng chi phí
      totalQuantity += entry.tokens_dca;           // Tính tổng số lượng token
    });

    // Tính giá trung bình
    const averagePrice = totalCost / totalQuantity;

    return +averagePrice.toFixed(3);
  }

  saveData() {
    const obj = {
      tokens_dca: +this.formGroup.value.tokens_dca,
      price_current_dca: +this.formGroup.value.price_current_dca,
      updateAt: new Date().getTime()
    }
    this.dcaService.addDcaToken(obj, this.dataResult.id).subscribe(res => {
      console.log(res)
      this.getListDCA()
    })
  }
}
