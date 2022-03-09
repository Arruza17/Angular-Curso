import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: Tarea;
  @Output() newToDo: EventEmitter<Tarea>;

  constructor() {
    this.tarea = new Tarea('','');
    this.newToDo = new EventEmitter();
   }

  ngOnInit(): void {
  }
  onClick(){
    this.newToDo.emit(this.tarea);
    this.tarea = new Tarea('','');
  }
}
