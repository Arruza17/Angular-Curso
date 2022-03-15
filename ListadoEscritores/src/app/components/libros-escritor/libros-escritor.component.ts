import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/Libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros-escritor',
  templateUrl: './libros-escritor.component.html',
  styleUrls: ['./libros-escritor.component.css']
})
export class LibrosEscritorComponent implements OnInit {

  libros: Libro[];
  escritorId: number;

  constructor(private librosService: LibrosService, private activatedRoute: ActivatedRoute) {
    this.libros = [];
    this.escritorId = 0;
  }

  async ngOnInit() {
    this.activatedRoute.parent?.params.subscribe(async params => {
      this.libros = await this.librosService.getAllById(parseInt(params['escritorId']));
    })
  }

}
