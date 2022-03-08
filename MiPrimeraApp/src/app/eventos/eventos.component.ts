import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  mensaje: string;

  constructor() { 
    this.mensaje = 'Este es el mensaje inicial';
  }

  ngOnInit(): void {
  }

  onClick($event: any){
    console.log('Se ha pulsado el boton');
  }
  onChange($event: any){
    console.log($event.target.value);
  }
  onMouseEnter(){
    //console.log('Entro en el div')
    this.mensaje = 'Estoy dentro del div';
  }
  onMouseOut(){
    //console.log('Entro en el div')
    this.mensaje = 'Saliendo del div';
  }
  onInput($event:any){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }
  onFocus(){
    console.log('Recibe el foco');
  }
  onBlur(){
    console.log('Pierdo el foco')
  }
}
