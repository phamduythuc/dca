import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";

const routes: Routes = [
  {path: '', redirectTo: 'dca', pathMatch: 'full'},
  {
    path: 'dca', loadChildren: () => import('./modules/dca-management/dca-management.module').then(m => m.DcaManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
