import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Departamento } from 'src/app/model/Departamento.enum';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  producto: Producto;
  cantidad:number;
  nombre:string;

  @Output() creado:EventEmitter<Producto>;

  constructor() {
    this.producto = new Producto('',0,Departamento.Carniceria);
    this.creado = new EventEmitter();
    this.cantidad = 0;
    this.nombre = '';

   }

  ngOnInit(): void {
  }
  onInput($event: any){
    this.cantidad = $event.target.value;
    console.log(this.cantidad);

  }
  onCreado(){
    this.producto.nombre = this.nombre;
    this.producto.cantidad = this.cantidad;

    this.creado.emit(this.producto);
  }

}
