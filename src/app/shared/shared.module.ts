import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyUsdPipe} from "./pipe/currency-usd.pipe";
import { UppercasePipePipe } from './pipe/uppercase-pipe.pipe';
import { ComfirmDialogComponent } from './components/comfirm-dialog/comfirm-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [CurrencyUsdPipe, UppercasePipePipe, ComfirmDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CurrencyUsdPipe, UppercasePipePipe]
})
export class SharedModule { }
