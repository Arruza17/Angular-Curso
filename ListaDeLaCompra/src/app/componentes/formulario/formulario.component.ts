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
  lista: Departamento[];

  @Output() creado:EventEmitter<Producto>;

  constructor() {
    this.producto = new Producto('',0,Departamento.Carniceria);
    this.creado = new EventEmitter();
    this.lista = [Departamento.Carniceria,Departamento.Fruteria,Departamento.Hogar,Departamento.Panaderia];

   }

  ngOnInit(): void {
  }
  onCreado(){
    this.creado.emit(this.producto);
    this.producto = new Producto('',0,Departamento.Carniceria);
  }
}

