import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
    console.log('***** Estoy en el constructor ****');
    console.log('Lo uso para inicializar propiedades');
   }

  ngOnInit(): void {
    console.log('***** Estoy en el ngOnInit');
    console.log('Lo uso para lanzar las acciones que arrancan el componente');
  }
  ngAfterViewInit(){
    console.log('***** Estoy en el ngAfterViewInit');
    console.log('Lo uso para lanzar acciones iniciales dentro de la plantilla');
  }
}
