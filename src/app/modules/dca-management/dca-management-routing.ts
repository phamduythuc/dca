import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListTokenDcaComponent} from "./list-token-dca/list-token-dca.component";
const route: Routes = [
  {path: '', component: ListTokenDcaComponent}
]
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})


export class DcaManagementRouting {

}
