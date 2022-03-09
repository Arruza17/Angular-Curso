import { Component, Input } from '@angular/core';
import { Tarea } from './model/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MiPrimeraApp';

  tareas : Tarea[];
  constructor(){
    this.tareas = [];
  }
  onNewToDo($event: Tarea){
    this.tareas.push($event);
  }

}
