import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  create(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  getAll(): Promise<Empleado[]> {
    return new Promise<Empleado[]>((resolve, reject) => {
      resolve(this.empleados);
    })
  }
}
