import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  arrayClases: string[];
  colorSeleccionado: string;
  mostrar: boolean;

  constructor() {
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');
    this.colorSeleccionado = 'r';
    this.mostrar = true;
  }

  ngOnInit(): void {

    setInterval(() => {
      if (this.colorSeleccionado === 'r') {
        this.colorSeleccionado = 'a';
      } else if (this.colorSeleccionado === 'a') {
        this.colorSeleccionado = 'v';
      } else {
        this.colorSeleccionado = 'r';
      }
    }, 1000);
  }
  OnClickMostrar(){
    this.mostrar = !this.mostrar;
  }


}
