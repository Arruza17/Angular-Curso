import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow',
        'transform': 'scale(2)'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      transition('rojo => amarillo',animate(500)),
      transition('amarillo => verde',animate(1000)),
      transition('verde => rojo',animate(1500)),
      transition('void => *', [
        style({
          'transform': 'translateX(-100%)',
        }),animate(1000)
      ])
    ])
  ]
})
export class AppComponent {

  color: string;

  constructor() {
    this.color = 'rojo';
  }
  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if ( this.color === 'verde') {
        this.color = 'rojo';
      }
    },2000)
  }
}
