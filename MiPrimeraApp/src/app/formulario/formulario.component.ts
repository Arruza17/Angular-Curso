import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  toDo: any;
  @Output() newToDo: EventEmitter<any>;

  constructor() {
    this.toDo = {};
    this.newToDo = new EventEmitter();
   }

  ngOnInit(): void {
  }
  onClick(){
    this.newToDo.emit(this.toDo);
  }
}
