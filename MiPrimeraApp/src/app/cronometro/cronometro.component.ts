import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  numeroAtras:number;

  constructor() { 
    this.numeroAtras = 10;
  }

  ngOnInit(): void {
  }
  onClick(){
    setInterval(() => {
      if(this.numeroAtras>0){
        this.numeroAtras--
      }
    },1000);
  }

}
