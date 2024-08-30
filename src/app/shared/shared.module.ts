import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyUsdPipe} from "./pipe/currency-usd.pipe";
import { UppercasePipePipe } from './pipe/uppercase-pipe.pipe';
import { ComfirmDialogComponent } from './components/comfirm-dialog/comfirm-dialog.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [CurrencyUsdPipe, UppercasePipePipe, ComfirmDialogComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CurrencyUsdPipe, UppercasePipePipe]
})
export class SharedModule { }
