import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escritor } from 'src/app/models/Escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService,private router: Router) {
    this.escritores = [];
  }

  ngOnInit(): void {
    this.escritores = this.escritoresService.getAll();
  }
  onChange($event: any) {
    console.log($event.target.value)
    if ($event.target.value == 'Todos') {
      this.escritores = this.escritoresService.getAll();
    } else {
      this.escritoresService.getByCountry($event.target.value)
      .then((escritores) => {
        this.escritores = escritores;
      });
    }
  }
  onClickAutor($escritor: Escritor){
    console.log("Autor con id "+$escritor.id+" seleccionado")
    this.router.navigate(['escritores', $escritor.id]);


  }
}
