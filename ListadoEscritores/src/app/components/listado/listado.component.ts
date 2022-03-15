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

  async ngOnInit() {
    // this.escritoresService.getAllPromise()
    // .then(escritores => {
    //   this.escritores = escritores;
    // });
    this.escritores = await this.escritoresService.getAllPromise();
  }
  async onChange($event: any) {
    // if ($event.target.value == 'Todos') {
    //   this.escritoresService.getAllPromise()
    //   .then(escritores => {
    //     this.escritores = escritores;
    //   });
    // } else {
    //   this.escritoresService.getByCountry($event.target.value)
    //   .then((escritores) => {
    //     this.escritores = escritores;
    //   });
    // }
    if($event.target.value === 'Todos'){
      this.escritores = await this.escritoresService.getAllPromise();
    } else {
      this.escritores = await this.escritoresService.getByCountry($event.target.value);

    }
    
  }
  onClickAutor($escritor: Escritor){
    console.log("Autor con id "+$escritor.id+" seleccionado")
    this.router.navigate(['escritores', $escritor.id]);


  }
}
