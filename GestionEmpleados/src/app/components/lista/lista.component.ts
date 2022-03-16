import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadosService: EmpleadosService) {
    this.empleados = [];
  }

  async ngOnInit(){
    this.empleados = await this.empleadosService.getAll();
  }

}
