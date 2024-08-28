import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOfEditItemComponent} from "../add-of-edit-item/add-of-edit-item.component";
import {AddDcaComponent} from "../add-dca/add-dca.component";
import {InforDcaComponent} from "../infor-dca/infor-dca.component";

@Component({
  selector: 'app-list-token-dca',
  templateUrl: './list-token-dca.component.html',
  styleUrls: ['./list-token-dca.component.scss']
})
export class ListTokenDcaComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  dataTable = [
    {
      id: 1,
      name_token: 'strk',
      initial_tokens: 200,
      original_purchase_price: 2,
      current_price: 4,
      investment_capital: 80,
      tokens_dca: 123,
      price_current_dca: 1,
      price_dca: 2,
      ave_price_dca: 212,
      total_investment_capital: 233,
      status: 2232,
      updateAt: new Date().toDateString(),

    }
  ]
  // displayedColumns: string[] = ['id', 'token', 'initial_token'];
  displayedColumns: string[] = ['id', 'name_token', 'initial_tokens', 'original_purchase_price', 'current_price', 'investment_capital', 'tokens_dca', 'price_dca', 'ave_price_dca', 'total_investment_capital', 'status', 'updateAt', 'action'];

  ngOnInit() {
    this.dataTable.map(item => {
      return {
        ...item,
        investment_capital: item.initial_tokens * item.original_purchase_price,
        price_dca: item.tokens_dca * item.price_current_dca,
        ave_price_dca: (item.initial_tokens * item.original_purchase_price) + (item.tokens_dca * item.price_current_dca)
      }
    })
  }

  createOfEdit(data: any) {
    console.log(data)
    this.dialog.open(AddOfEditItemComponent, {
      data: {
        data: data
      },
      panelClass: ['w-[65%]', 'rounded-2xl']
    })
  }

  dcaToken(data: any) {
    this.dialog.open(AddDcaComponent, {
      data: {
        data: data
      },
      panelClass: ['w-[50%]', 'rounded-2xl']
    })
  }
  viewInfoDca() {
    this.dialog.open(InforDcaComponent, {
      data: {

      },
      panelClass: ['w-[40%]', 'rounded-lg']
    })
  }

}
