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
  getAllPromise(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(this.escritores);
    })
  }

  getByCountry(pais: string): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(this.escritores.filter(p => p.pais.toLowerCase() === pais.toLowerCase()))
    })
  }

  getById(escritorId: number): Promise<Escritor>{
    return new Promise<Escritor>((resolve,reject) => {
      //resolve(this.escritores.find(p => p.id === escritorId))
      const escritor: any = this.escritores.find(e => {
        return e.id === escritorId;
      });
      resolve(escritor);
    })
  }

}
