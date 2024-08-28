import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-infor-dca',
  templateUrl: './infor-dca.component.html',
  styleUrls: ['./infor-dca.component.scss']
})
export class InforDcaComponent {
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<InforDcaComponent>) {
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
}
