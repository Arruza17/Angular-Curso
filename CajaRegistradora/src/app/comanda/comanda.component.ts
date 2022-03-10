import { Component, Input, OnInit } from '@angular/core';
import { ListadoEspecial } from '../model/listadoEspecial.model';
import { Producto } from '../model/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[];
  

  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {
  }
  getTotalPrice(): number {
    let totalPrice: number = 0
    this.productos.forEach(p => {
      totalPrice += p.precio;
    });
    return totalPrice;
  }
  listadoEspecialArray(){
    let listadoEspecial: ListadoEspecial[] = [];
    let esta: boolean = false;
    this.productos.forEach(producto => {
      esta = false;
      for (let i = 0; i < listadoEspecial.length; i++) {
        if (producto.nombre === listadoEspecial[i].nombre) {
          esta = true;
          listadoEspecial[i].veces+=1;
          break;
        }
      }
      if (!esta) {
        listadoEspecial.push(new ListadoEspecial(producto.nombre,producto.precio));
      }
    });
    return listadoEspecial;
  }
  onClickBorrar($event: number){
    this.productos.splice($event,1);
  }
}
