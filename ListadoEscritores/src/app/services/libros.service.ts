import { Injectable } from '@angular/core';
import { LIBROS } from '../libros.db';
import { Libro } from '../models/Libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[];
  constructor() {
    this.libros = LIBROS;
  }

  getAllById(escritorId: number):Promise<Libro[]>{
    return new Promise <Libro[]> ((resolve,reject) => {
      resolve(this.libros.filter(l => l.escritor === escritorId))
    })
  }
}
