import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  /**
   * 
   * valid (si todas las validaciones dan true) -- invalid
   * pristinie (el campo no ha sido escrito) -- dirty (ya ha habido algo escrito aunque luego lo haya borrado)
   * untouched (todavia no ha tenido el foco y lo habia perdido) -- touched (habia tenido el foco, pero lo ha perdido)
   */

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl(),
      repite_password: new FormControl(),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ])
    });
  }

  ngOnInit(): void {
    const emailControl = this.formulario.controls['email'];
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    })
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(FormControl: any) {
    const value = FormControl.value;
    const max: number = 65;
    const min: number = 18;
    if (value >= 18 && value <= 65) {
      return null;
    } else {
      return { edadValidator: { max, min } }
    }

  }
  dniValidator(FormControl: any) {
    const value: string = FormControl.value;
    const letras: string = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numeros: number = parseInt(value.substring(0, value.length - 1));
      const letra: string = value.charAt(value.length - 1);

      const calculo = numeros % 23;
      const letraSeleccionada = letras.charAt(calculo);
      if (letra.toUpperCase() == letraSeleccionada) {
        return null;
      } else {
        return {dniValidator: 'La letra no coincide con el número'}
      }
    }else{
      return {dniValidator: 'El dni está en formato erroneo'}
    }


  }
}
