import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  textoBoton: string;
  constructor() {
    this.tareas = [];
    this.textoBoton = 'INCOMPLETA';
  }

  ngOnInit(): void {
  }
  onClickFinish(tarea: Tarea,$event:any ){
    
    tarea.finalizada = !tarea.finalizada;
    console.log(this.textoBoton);
    
  }
  onClickBorrar(i:number){
    console.log(i);
    this.tareas.splice(i,1);
  }


}
