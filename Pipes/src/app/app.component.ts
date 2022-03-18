import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // CurrencyPipe
  precio: number;

  // DecimalPipe
  numeroDecimal: number;

  // DatePice
  fechaActual: Date;

  // PercentPipe
  numeroAleatorio: number;

  // JSONPipe
  estudiante: any;

  // Lower, Upper, Title
  texto: string;

  // SlicePipe
  animales: string[]
  minimo: number;
  maximo: number;



  constructor(){
    this.precio = 198.87;
    this.numeroDecimal = 3.14159265358;
    this.fechaActual = new Date();
    this.numeroAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Fernando',
      apellidos: 'Pérez'

    }
    this.texto = 'En un lugar de la mancha'
    this.animales = [
      'perro', 'gato', 'pájaro','burro'
    ]
    this.minimo = 0;
    this.maximo = this.animales.length;


  }

  ngOnInit() {
    setInterval(() => this.fechaActual = new Date()),1000
  }
}
