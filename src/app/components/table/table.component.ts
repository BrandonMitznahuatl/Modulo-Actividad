import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Brandon', weight: 53000, symbol: 'Linea blanca'},
    {position: 2, name: 'Sergio', weight: 40026, symbol: 'Electrodomesticos'},
    {position: 3, name: 'Daniel', weight: 6941, symbol: 'Ropa y Moda'},
    {position: 4, name: 'Arturo', weight: 90122, symbol: 'Carnes'},
    {position: 5, name: 'Oscar', weight: 10811, symbol: 'Cosmeticos y Belleza'},
    {position: 6, name: 'Antonio', weight: 12010, symbol: 'Farmacia'},
    {position: 7, name: 'Wendy', weight: 14006, symbol: 'Temporada'},
    {position: 8, name: 'Omar', weight: 15999, symbol: 'Jugueteria'},
    {position: 9, name: 'Sofia', weight: 18998, symbol: 'Accesorios'},
    {position: 10, name: 'Angel', weight: 20179, symbol: 'Electronica'},
  ];

  displayedColumns: string[] = ['No', 'name', 'sale', 'departament'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
