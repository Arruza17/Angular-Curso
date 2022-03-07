import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  numero1: number;
  numero2: number;
  resultado: number;
  constructor() {
    this.numero1 = 20;
    this.numero2 = 40;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.resultado = this.numero1+this.numero2;
  }
}
