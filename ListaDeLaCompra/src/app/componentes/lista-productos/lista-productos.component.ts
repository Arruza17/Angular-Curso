import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() title: string;
  @Input() productos: Producto[];
  @Output() comprado: EventEmitter<Producto>;

  constructor() {
    this.title = '';
    this.productos = [];
    this.comprado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onClick($event: Producto, i: number) {
    if (!$event.comprado) {
      console.log('Comprado')
      //Ponemos el valor comprado del producto seleccionado a true
      $event.comprado = true;
      //Borramos el producto del array
      this.productos.splice(i, 1);
      //Emitimos a el padre diciendole que añada este producto al otro array
      this.comprado.emit($event);
    } else {
      console.log('Eliminado')
      //Eliminar por completo
      this.productos.splice(i, 1);
    }

  }

}