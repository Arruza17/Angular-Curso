import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from './model/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MiPrimeraApp';

  mainTexto: string;

  tareas: Tarea[];
  constructor() {
    this.tareas = [];
    this.mainTexto = 'Texto desde el constructor del padre';
  }
  ngOnInit(): void {
    let i:number = 0;
    setInterval(() => {this.mainTexto = 'h'+i;i++},2000);
  }
  onNewToDo($event: Tarea) {
    this.tareas.push($event);
  }

}
