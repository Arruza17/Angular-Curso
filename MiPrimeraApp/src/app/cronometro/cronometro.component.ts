import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() numeroAtras: number;
  contador: number;
  @Output() finalizacion: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.numeroAtras = 10;
    this.finalizacion = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.numeroAtras ? this.numeroAtras : 10;
  }

  onClick() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador < 0) {
        //Metodo que para el intervalo pasandole por parámetro la variable
        clearInterval(interval);
        this.contador = this.numeroAtras;
        this.finalizacion.emit('Finalizacion del cronometro con el numero '+this.numeroAtras);
      }
    }, 1000);
  }

}
