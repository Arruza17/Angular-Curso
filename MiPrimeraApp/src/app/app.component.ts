import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MiPrimeraApp';
  campoTexto: string;

  persona: any;

  titulos: string[];
  constructor(){
    this.campoTexto = 'Valor Inicial';
    this.titulos = ['Interestellar','Cars','Drive to Survive'];
    this.persona = {};
  }

  onAlertaPulsada($event: any){
    console.log($event);
  }
  onFinalizacion($event: any){
    console.log($event);
  }
  onClick(){
    this.campoTexto = 'Valor desde el botón';
  }
}
