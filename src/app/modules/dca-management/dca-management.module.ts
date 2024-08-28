import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTokenDcaComponent } from './list-token-dca/list-token-dca.component';
import {MatTableModule} from '@angular/material/table';
import {DcaManagementRouting} from "./dca-management-routing";
import {SharedModule} from "../../shared/shared.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import { AddOfEditItemComponent } from './add-of-edit-item/add-of-edit-item.component';
import {MatButtonModule} from "@angular/material/button";
import {DialogModule} from "@angular/cdk/dialog";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ListTokenDcaComponent,
    AddOfEditItemComponent
  ],
  imports: [
    CommonModule,
    DcaManagementRouting,
    MatTableModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class DcaManagementModule { }
