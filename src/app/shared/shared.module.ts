import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyUsdPipe} from "./pipe/currency-usd.pipe";



@NgModule({
  declarations: [CurrencyUsdPipe],
  imports: [
    CommonModule
  ],
  exports: [CurrencyUsdPipe]
})
export class SharedModule { }
