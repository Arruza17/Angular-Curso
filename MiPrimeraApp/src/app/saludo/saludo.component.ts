import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  //Estas propiedades son las unicas que podemos utilizar
  //dentro del html de saludo
  mensaje: string;
  identiParrafo: string;
  identifInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.identiParrafo = 'parrafoPrincipal';
    this.identifInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
      this.identiParrafo = 'main';
      this.identifInput = 'password';
    }, 3000);
   }

  ngOnInit(): void {
  }

  mostrarSaludo(): string{
    return 'Saludo desde el método';
  }

}
