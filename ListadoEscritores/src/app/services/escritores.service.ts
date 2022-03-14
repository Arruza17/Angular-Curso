import { Injectable } from '@angular/core';
import { ESCRITORES } from '../escritores.db';
import { Escritor } from '../models/Escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  escritores: Escritor[];

  constructor() {
    this.escritores = ESCRITORES;
  }

  getAll(): Escritor[] {
    return this.escritores;

  }

  getByCountry(pais: string): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(this.escritores.filter(p => p.pais.toLowerCase() === pais.toLowerCase()))
    })
  }

  // getById(escritorId: number): Promise<Escritor> {
  //   return new Promise<Escritor>((resolve, reject) => {
  //     resolve(this.escritores.find(p => p.id === escritorId))
  //   })
  // }
  getById(escritorId: number): Promise<Escritor[]>{
    return new Promise<Escritor[]>((resolve,reject) => {
      resolve(this.escritores.filter(p => p.id === escritorId))
    })
  }
}
