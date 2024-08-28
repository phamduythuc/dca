import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyUsdPipe} from "./pipe/currency-usd.pipe";
import { UppercasePipePipe } from './pipe/uppercase-pipe.pipe';



@NgModule({
  declarations: [CurrencyUsdPipe, UppercasePipePipe],
  imports: [
    CommonModule
  ],
  exports: [CurrencyUsdPipe, UppercasePipePipe]
})
export class SharedModule { }
