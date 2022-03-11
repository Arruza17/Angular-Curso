import { Component, Input } from '@angular/core';
import { Departamento } from './model/Departamento.enum';
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

  producto:Producto;

  constructor(){
    this.productosAComprar = [];
    this.productosComprados = [];
    this.producto = new Producto('',0,Departamento.Carniceria);
  }
  
  onCreado($event:Producto){
    this.productosAComprar.push($event);
  }
  
  onComprado($event: Producto){
    this.productosComprados.push($event);
  }
}
