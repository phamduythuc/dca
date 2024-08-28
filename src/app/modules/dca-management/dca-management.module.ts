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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddDcaComponent } from './add-dca/add-dca.component';
import { InforDcaComponent } from './infor-dca/infor-dca.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    ListTokenDcaComponent,
    AddOfEditItemComponent,
    AddDcaComponent,
    InforDcaComponent
  ],
  imports: [
    CommonModule,
    DcaManagementRouting,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatAutocompleteModule
  ]
})
export class DcaManagementModule { }
