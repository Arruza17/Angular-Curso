import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PersonasService]
})
export class ListaComponent implements OnInit {

  arrayPersonas: Persona[];

  constructor(private personasService: PersonasService) {
    this.arrayPersonas = [];
   }

  ngOnInit(): void {
    this.arrayPersonas = this.personasService.getAll();
  }

}
