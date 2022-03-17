import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  personajes: any[];
  pageNumber: number;

  constructor(private rickMortyService: RickAndMortyService){
    this.personajes = [];
    this.pageNumber = 1;
  }
  ngOnInit(){
    this.rickMortyService.getByPage(this.pageNumber)
    .subscribe(response => this.personajes = response);
  }

  onClickBack(){
    this.rickMortyService.getByPage(this.pageNumber-1)
    .subscribe(response => this.personajes = response);
  }
  onClickNext(){
    this.rickMortyService.getByPage(this.pageNumber+1)
    .subscribe(response => this.personajes = response);
  }
}
