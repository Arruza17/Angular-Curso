import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from 'src/app/models/Escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;

  constructor(private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService) {
    this.escritor = new Escritor(0, '', '', '', '');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.escritor = await this.escritoresService.getById(parseInt(params['escritorId']));

    })

  }

}
