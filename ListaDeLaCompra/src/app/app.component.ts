import { Component } from '@angular/core';
import { Producto } from './model/Producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaDeLaCompra';

  productosAComprar: Producto[];
  productosComprados: Producto[];

  constructor(){
    this.productosAComprar = [];
    this.productosComprados = [];

  }

  onCreado($event:Producto){
    this.productosAComprar.push($event);
  }
}
