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
  seleccionado: Departamento;
  nombre: string;

  @Output() creado:EventEmitter<Producto>;

  constructor() {
    this.producto = new Producto('',0,Departamento.Carniceria);
    this.creado = new EventEmitter();
    this.lista = [Departamento.Carniceria,Departamento.Fruteria,Departamento.Hogar,Departamento.Panaderia];
    this.seleccionado = Departamento.Carniceria;
    this.nombre = '';

   }

  ngOnInit(): void {
  }
  onInput($event: any){
    this.producto.cantidad = $event.target.value;

  }
  onInputName($event: any){
    this.producto.nombre = $event.target.value;
  }
  onCreado(){
    this.producto.departamento = this.seleccionado;
    this.creado.emit(this.producto);
    this.producto = new Producto('',0,Departamento.Carniceria);
  }
  onChange($event:any){
    this.producto.departamento = $event.target.value;

  }
}
