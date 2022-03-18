import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  personajesObjeto: any;
  personajes: any[];
  pageNumber: number;
  numPages: number;

  constructor(private rickMortyService: RickAndMortyService){
    this.personajesObjeto = {};
    this.personajes = [];
    this.pageNumber = 1;
    this.numPages = 0;
  }
  ngOnInit(){
    this.rickMortyService.getByPage(this.pageNumber)
    .subscribe(response => {
      this.personajesObjeto = response;
      this.pageNumber = parseInt(this.personajesObjeto.info.next
        .slice(this.personajesObjeto.info.next.length -1))-1;
      this.personajes = this.personajesObjeto.results;
      console.log(this.personajes)
      this.numPages = this.personajesObjeto.info.pages
    });
  }

  onClickBack(){
    this.rickMortyService.getByPage(this.pageNumber-1)
    .subscribe(response => {
      this.personajesObjeto = response;
      this.pageNumber--;
      this.personajes = this.personajesObjeto.results;
      console.log(this.personajes)
    });
  }
  onClickNext(){
    this.rickMortyService.getByPage(this.pageNumber+1)
    .subscribe(response => {
      this.personajesObjeto = response;
      this.pageNumber++;
      this.personajes = this.personajesObjeto.results;
      console.log(this.personajes)
    });
  }
}
