import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable()
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

  getAll(): Persona[] {
    return this.personas;
  }

  create(persona: Persona) {
    this.personas.push(persona);
  }

  activos(): Promise<Persona[]> {
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const arrTemp: Persona[] = [];
      for (let p of this.personas) {
        if (p.activo) {
          arrTemp.push(p);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

  activosV2(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.personas.filter(p => p.activo))
    });
  }
}
