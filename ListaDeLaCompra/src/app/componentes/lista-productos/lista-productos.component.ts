import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() title: string;
  @Input() productos:Producto[];
  constructor() {
    this.title = '';
    this.productos = [];
   }

  ngOnInit(): void {
  }

}
