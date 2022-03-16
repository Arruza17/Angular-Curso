import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private empleadosService: EmpleadosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [

      ]),
      departamento: new FormControl(),
      password: new FormControl(),
      imagen: new FormControl()

    });
  }

  ngOnInit(): void {
  }
  /**
   * Method that is thrown when the submit button is clicked
   */
  onSubmit() {
    this.empleadosService.create(new Empleado(
      //Nombre
      this.formulario.controls['nombre'].value,
      //Apellidos
      this.formulario.controls['apellidos'].value,
      //Email
      this.formulario.controls['email'].value,
      //Edad
      parseInt(this.formulario.controls['edad'].value),
      //Departamento
      this.formulario.controls['departamento'].value,
      //Password
      this.formulario.controls['password'].value,
      //Imagen
      this.formulario.controls['imagen'].value,
    )
    );
  }

}
