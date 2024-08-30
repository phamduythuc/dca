import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DcaManagementService} from "../dca-management.service";
import {concatMap, forkJoin, map} from "rxjs";
import {DCA} from "../../../../data/interface/token";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-dca',
  templateUrl: './add-dca.component.html',
  styleUrls: ['./add-dca.component.scss']
})
export class AddDcaComponent implements OnInit {
  dataResult: any;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddDcaComponent>, private dcaService: DcaManagementService, private snackBar: MatSnackBar) {
    this.dataResult = this.data?.data;
  }

  totalQuantity: number = 0;
  totalCost: number = 0;
  dataDca: DCA[] = []
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
    this.totalQuantity = 0;
    this.totalCost = 0
    // Duyệt qua danh sách các lần DCA để tính tổng chi phí và tổng số lượng token
    dcaList.forEach((entry: any) => {
      this.totalCost += entry.tokens_dca * entry.price_current_dca; // Tính tổng chi phí
      this.totalQuantity += entry.tokens_dca;           // Tính tổng số lượng token
    });

    // Tính giá trung bình
    const averagePrice = this.totalCost / this.totalQuantity;

    return +averagePrice.toFixed(3);
  }

  saveData() {
    const obj = {
      tokens_dca: +this.formGroup.value.tokens_dca,
      price_current_dca: +this.formGroup.value.price_current_dca,
      updateAt: new Date().getTime()
    }
    this.dataDca.push(obj)
    this.averagePrice = this.calculateAveragePrice(this.dataDca);
    const calcDCA = {
      ave_price_dca: this.averagePrice,
      price_dca: this.totalCost,
      tokens_dca: this.totalQuantity
    }

    this.dcaService.addDcaToken(obj, this.dataResult?.id).pipe(concatMap(res => this.dcaService.updateTokenData(this.dataResult?.id, calcDCA))).subscribe(res => {
      this.snackBar.open('DCA success', 'success');
      this.dialogRef.close(true);
    });


  }
}
