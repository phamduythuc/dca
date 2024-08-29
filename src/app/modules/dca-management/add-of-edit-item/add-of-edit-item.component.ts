import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import ccxt from "ccxt";
import {DcaManagementService} from "../dca-management.service";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-add-of-edit-item',
  templateUrl: './add-of-edit-item.component.html',
  styleUrls: ['./add-of-edit-item.component.scss']
})
export class AddOfEditItemComponent implements OnInit {
  dataResult: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddOfEditItemComponent>, private fb: FormBuilder, private dcaService: DcaManagementService) {
    this.dataResult = this.data?.data;
  }

  formGroup: FormGroup = this.fb.group({
    name_token: ['', [Validators.required]],
    initial_tokens: [0, [Validators.required, Validators.min(0)]],
    original_purchase_price: [0, [Validators.required, Validators.min(0)]]
  })
  currentPrice: number = 0
  listMarket: any = []

  ngOnInit() {
    if (this.dataResult) {
      this.formGroup.patchValue(this.dataResult)
      this.getPriceTokenInvest(this.formGroup.value?.name_token);
    }
    this.dcaService.loadMarkerBinance();
    this.formGroup.get('name_token')?.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(input => {
      this.listMarket = this.dcaService.searchMarkets(input)
      console.log(this.listMarket)
    })
  }

  getFocusout() {
    const valueNameToken = this.formGroup.value?.name_token;
    this.getPriceTokenInvest(valueNameToken);
  }

  getPriceTokenInvest(value: string) {
    this.dcaService.getPriceToken(value).subscribe(res => {
      if (res) {
        this.currentPrice = res.last
      }
    })
  }

  saveData() {
    const obj = {
      ...this.formGroup.value,
      price_dca: null,
      tokens_dca: null,
      updateAt: new Date().getTime()
    }
    if (this.dataResult) {
      this.dcaService.updateTokenData(this.dataResult.id, obj).subscribe(res => {
        console.log(res)
      })
    } else {
      this.dcaService.addDataToken(obj).subscribe(res => {
      })
    }
  }

}
