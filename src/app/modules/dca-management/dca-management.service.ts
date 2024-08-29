import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, fromEvent, map, Observable} from "rxjs";
import ccxt from "ccxt";
import {getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DcaManagementService {
  markets: any = []
  db: any

  constructor(private http: HttpClient) {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);
  }

  getPriceToken(symbol: string): Observable<any> {
    const binance = new ccxt.binance
    return from(binance.fetchTicker(symbol))
  }

  async loadMarkerBinance(): Promise<void> {
    const binance = new ccxt.binance
    this.markets = await binance.fetchMarkets()
  }

  searchMarkets(input: string): string[] {
    return this.markets.filter((symbol: any) => symbol?.base.includes(input.toUpperCase())
      // symbol.baseId.toLowerCase().includes(input.toLowerCase())
    );
  }

  getListTokensInvest(): Observable<any> {
    const tokensCollection = collection(this.db, 'list-token');
    const tokenPromise = getDocs(tokensCollection);  // Lấy dữ liệu từ Firestore và trả về Promise
    return from(tokenPromise).pipe(
      map((tokenSnapshot) => tokenSnapshot.docs.map(doc => {
       return {id: doc.id, ...doc.data()}
      }))  // Chuyển đổi kết quả thành Observable
    );
  }
  addDataToken (data: any): Observable<any> {
    const tokensCollection = collection(this.db, 'list-token');
    const token = addDoc(tokensCollection, data)
    return from(token).pipe(map((tokenSnapshot) =>   this.addDcaToken({tokens_dca: data.initial_tokens, price_current_dca: data.original_purchase_price, updateAt: new Date().getTime()}, tokenSnapshot.id) ))
  }
  updateTokenData(documentId: string, updatedData: any): Observable<any> {
    const tokenDocRef = doc(this.db, 'list-token', documentId);  // Tạo reference đến document bằng documentId
    return from(updateDoc(tokenDocRef, updatedData));  // Update document với dữ liệu mới
  }

  getDcaHistory(documentId: string): Observable<any[]> {
    const dcaHistoryCollection = collection(this.db, `list-token/${documentId}/dca-history`);
    const dcaHistoryPromise = getDocs(dcaHistoryCollection);  // Lấy collection con dca-history
    return from(dcaHistoryPromise).pipe(
      map((querySnapshot) => {
        return querySnapshot.docs.map(doc => doc.data());  // Trả về data của lịch sử DCA
      })
    );
  }
  addDcaToken(data: any, documentId: string):Observable<any> {
    const tokensCollection = collection(this.db, `list-token/${documentId}/dca-history`);
    const token = addDoc(tokensCollection, data)
    return from(token)
  }

}

