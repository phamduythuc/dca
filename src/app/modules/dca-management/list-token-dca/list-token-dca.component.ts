import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddOfEditItemComponent} from "../add-of-edit-item/add-of-edit-item.component";

@Component({
  selector: 'app-list-token-dca',
  templateUrl: './list-token-dca.component.html',
  styleUrls: ['./list-token-dca.component.scss']
})
export class ListTokenDcaComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  dataTable: any = []
  // displayedColumns: string[] = ['id', 'token', 'initial_token'];
  displayedColumns: string[] = ['id', 'token', 'initial_token', 'original_purchase_price', 'current_price', 'investment_capital', 'tokens_dca', 'price_dca', 'ave_price_dca', 'total_investment_capital', 'updateAt', 'action'];

  ngOnInit() {
    this.dataTable = [
      {
        id: 1,
        token: 'strk',
        initial_token: 200,
        original_purchase_price: 2,
        current_price: 4,
        investment_capital: 80,
        tokens_dca: 123,
        price_dca: 2,
        ave_price_dca: 212,
        total_investment_capital: 233,
        updateAt: new Date().toDateString(),

      }
    ]
  }
  createOfEdit(data: any) {
    this.dialog.open(AddOfEditItemComponent, {
      data: {

      },
      panelClass: ['w-[65%]', 'rounded-2xl']
    })
  }

}
