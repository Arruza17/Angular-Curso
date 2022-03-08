import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculo: string;
  calculoFinalizado: boolean;

  constructor() {
    this.calculo = '';
    this.calculoFinalizado = false;
  }

  ngOnInit(): void {
  }

  onClick($event: any) {
    if(this.calculoFinalizado){
      this.calculo = $event.target.innerText;
      this.calculoFinalizado = false;
    }
    this.calculo += $event.target.innerText;

  }
  onClickResult() {
      this.calculo = eval(this.calculo);
      this.calculoFinalizado = true;

  }

}
