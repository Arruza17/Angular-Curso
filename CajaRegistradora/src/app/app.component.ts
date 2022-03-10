import { Component, Input, Output } from '@angular/core';
import { Producto } from './model/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comidas: Producto[];
  bebidas: Producto[];
  comandaTotal: Producto[];

  constructor() {
    this.comidas = [];
    this.bebidas = [];
    this.comandaTotal = [];
  }
  

  ngOnInit() {
    this.comidas.push(
      new Producto('Cocido', 10.5),
      new Producto('Paella', 12.2),
      new Producto('Cachopo', 15.75),
      new Producto('Pizza', 7.5),
      new Producto('Pasta', 6.9),
      new Producto('Hamburguesa', 5.75)

    );
    this.bebidas.push(
      new Producto('Coca Cola',1.75),
      new Producto('Fanta',1.65),
      new Producto('Cerveza',1.2),
      new Producto('Agua',1.5)
    );
  }

  onProductoSeleccionado($event: Producto){
    this.comandaTotal.push($event);

  }

}
