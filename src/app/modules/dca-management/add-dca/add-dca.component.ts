import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-dca',
  templateUrl: './add-dca.component.html',
  styleUrls: ['./add-dca.component.scss']
})
export class AddDcaComponent {
  dataResult: any;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddDcaComponent>) {
    this.dataResult = this.data?.data;
  }

  dataDca = [
    {
      tokens: 200,
      price: 2,
      time: new Date().toDateString()
    },
    {
      tokens: 200,
      price: 2,
      time: new Date().toDateString()
    }
  ]
  formGroup: FormGroup = this.fb.group({
    tokens_dca: [0, [Validators.required, Validators.min(0)]],
    price_current_dca: [0, [Validators.required, Validators.min(0)]]
  })
}
