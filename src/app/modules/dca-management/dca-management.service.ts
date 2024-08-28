import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import ccxt from "ccxt";
import Precise from "ccxt";
@Injectable({
  providedIn: 'root'
})
export class DcaManagementService {
  markets: any =[]
  constructor(private http: HttpClient) { }
  getPriceToken (symbol: string) : Observable<any> {
    const binance = new ccxt.binance
    return from(binance.fetchTicker(symbol))
  }
   async  loadMarkerBinance() : Promise<void> {
    const binance = new ccxt.binance
    this.markets =  await binance.fetchMarkets()
  }
  searchMarkets(input: string): string[] {
    return this.markets.filter((symbol: any) => symbol?.base.includes(input.toUpperCase())
      // symbol.baseId.toLowerCase().includes(input.toLowerCase())
    );
  }
}
