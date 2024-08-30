import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOfEditItemComponent} from "../add-of-edit-item/add-of-edit-item.component";
import {AddDcaComponent} from "../add-dca/add-dca.component";
import {InforDcaComponent} from "../infor-dca/infor-dca.component";
import {DcaManagementService} from "../dca-management.service";
import {concatMap, forkJoin, map} from "rxjs";
import {ComfirmDialogComponent} from "../../../shared/components/comfirm-dialog/comfirm-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Token} from "../../../../data/interface/token";

@Component({
  selector: 'app-list-token-dca',
  templateUrl: './list-token-dca.component.html',
  styleUrls: ['./list-token-dca.component.scss']
})
export class ListTokenDcaComponent implements OnInit {
  constructor(private dialog: MatDialog, private dcaService: DcaManagementService, private snackBar: MatSnackBar) {
  }

  dataTable: Token[] = []
  // displayedColumns: string[] = ['id', 'token', 'initial_token'];
  displayedColumns: string[] = ['id', 'name_token', 'initial_tokens', 'original_purchase_price', 'current_price', 'investment_capital', 'tokens_dca', 'price_dca', 'ave_price_dca', 'total_investment_capital', 'status', 'updateAt', 'action'];

  ngOnInit() {
    this.loadTokens()
  }

  createOfEdit(data: Token | null) {
    console.log(data)
    this.dialog.open(AddOfEditItemComponent, {
      data: {
        data: data
      },
      panelClass: ['w-[65%]', 'rounded-2xl']
    }).afterClosed().subscribe((result: boolean) => {
      if (result) this.loadTokens();
    })
  }

  dcaToken(data: Token) {
    this.dialog.open(AddDcaComponent, {
      data: {
        data: data
      },
      panelClass: ['w-[50%]', 'rounded-2xl']
    }).afterClosed().subscribe((result :boolean) => {
      if (result) {
        this.loadTokens();
      }
    })
  }

  viewInfoDca() {
    this.dialog.open(InforDcaComponent, {
      data: {},
      panelClass: ['w-[40%]', 'rounded-lg']
    })
  }

  loadTokens() {
    this.dcaService.getListTokensInvest().subscribe((tokens :Token[]) => {
      const priceRequests = tokens.map((token: Token) =>
        this.dcaService.getPriceToken(token.name_token).pipe(
          map(priceResponse => {
            const total_capital = token?.price_dca ? token.price_dca : token.initial_tokens * token.original_purchase_price
            const checkDca = token?.tokens_dca ? token.tokens_dca : token.initial_tokens;
          return{
            ...token,
            initial_tokens_display: token?.initial_tokens + ' ' + token?.name_token.split('/')[0],
            current_price: priceResponse.last , // Thêm thuộc tính current_price
            current_price_class:  priceResponse.last > token?.original_purchase_price ? 'text-emerald-600' :  priceResponse.last < token?.original_purchase_price ? 'text-red-600' : 'text-slate-900',
            price_dca_display: token?.price_dca ? +(+token?.price_dca - +token?.original_purchase_price).toFixed(3): 0,
            token_dca_display: token?.tokens_dca ? `${token?.tokens_dca} ${token?.name_token.split('/')[0]}` : `${0} ${token?.name_token.split('/')[0]}`,
            ave_price_dca_display: token?.ave_price_dca ? token?.ave_price_dca : 0 ,
            investment_capital: token.initial_tokens * token.original_purchase_price,
            total_capital: total_capital,
            status: (checkDca * priceResponse.last) - total_capital,
            updateAt: new Date(token.updateAt).toLocaleString(), // Giữ nguyên các thuộc tính của token
          }})
        )
      );

      forkJoin(priceRequests).subscribe((updatedTokens: Token[]) => {
        this.dataTable = updatedTokens;  // Cập nhật danh sách token với giá hiện tại
        console.log(this.dataTable);
      });
    });
  }
  deleteToken(id: string) {
    this.dialog.open(ComfirmDialogComponent, {
      data: {
        title: 'Delete Token',
        content: 'Are you sure you want to delete token'
      },
      panelClass: ['w-[30%]']
    }).afterClosed().subscribe((result : boolean) => {
      if (result) {
        this.dcaService.deleteToken(id).subscribe(res => {
          if (res) {
            this.snackBar.open('Delete success', 'success');
            this.loadTokens();
          }
        })
      }
    })
  }

}
