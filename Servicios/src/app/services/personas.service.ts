import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[];

  constructor() { 
    this.personas = [
      new Persona('Mario', 'Rodriguez', 32, true),
      new Persona('Rocío', 'García', 15, false),
      new Persona('Laura', 'Robles', 28, true),
      new Persona('Lorenzo', 'Romero', 65, true)
    ];
  }

  getAll(): Persona[]{
    return this.personas;
  }
}
