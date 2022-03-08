import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input()numero1: string;
  @Input()numero2: string;
  resultado: number;
  constructor() {
    this.numero1 = '10';
    this.numero2 = '10';
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.resultado = parseInt(this.numero1)+parseInt(this.numero2);
  }
}
