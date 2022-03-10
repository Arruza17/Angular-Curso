import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../model/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Output() producto: EventEmitter<Producto> 

  constructor() {
    this.productos = [];
    this.producto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(productoClickado: Producto){
    this.producto.emit(productoClickado);
    
  }

}
