import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MiPrimeraApp';

  toDoes : any[] = [];
  constructor(){
    
  }
  onNewToDo($event: any){
    this.toDoes.push($event);
    console.log(this.toDoes)
  }

}
