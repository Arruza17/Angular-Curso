import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() array: Tarea[];
  constructor() {
    this.array = [];
  }

  ngOnInit(): void {
  }
  mostrarTareas():string {
    let result = `<ul>`;
    this.array.forEach(tarea => {
      result += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`;
    });
    result += `<ul>`;

    return result;
  }


}
