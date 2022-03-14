import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  arrPersonas: Persona[];

  constructor(private personasService: PersonasService) {
    this.arrPersonas = [];
  }
  ngOnInit() {
    this.arrPersonas = this.personasService.getAll();

  }
  onClick() {
    this.personasService.create(
      new Persona('Fermin', 'Díaz', 22, true)
    )
  }
  async onClickActivas() {
    //   this.personasService.activos()
    //     .then((arrayTemPersonas) => {
    //       console.log(arrayTemPersonas)

    //     }).catch(error => console.log(error))
    // 
    try {
      this.arrPersonas = await this.personasService.activosV2();

    } catch (e) {
      console.log(e);

    }

  }
}
