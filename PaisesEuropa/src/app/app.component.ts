import { Component } from '@angular/core';
import { PaisesEuropaService } from './services/paises-europa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises: any[];

  constructor(private paisesService: PaisesEuropaService){
    this.paises = [];
  }

  ngOnInit(){
    try{
      debugger
      this.paisesService.getAllCountries()
      .subscribe(response => this.paises = response);
    }catch(error){
      console.log(error)
    }

  }
}
