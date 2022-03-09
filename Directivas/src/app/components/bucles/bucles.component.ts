import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: any[];

  constructor() {
    this.personas = [
      { nombre: 'Mario', apellidos: 'Pérez', edad: 36 },
      { nombre: 'Rosa', apellidos: 'García', edad: 20 },
      { nombre: 'Rocio', apellidos: 'Martín', edad: 18 },
      { nombre: 'Manuel', apellidos: 'Rodríguez', edad: 19 },
    ]
  }

  ngOnInit(): void {
  }
  onClick() {
    this.personas.push({
      nombre: 'Ander', apellidos: 'Arruza', edad: '20'
    })
  }

}
