import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-of-edit-item',
  templateUrl: './add-of-edit-item.component.html',
  styleUrls: ['./add-of-edit-item.component.scss']
})
export class AddOfEditItemComponent {
  constructor(public dialogRef: MatDialogRef<AddOfEditItemComponent>) {
  }
}
