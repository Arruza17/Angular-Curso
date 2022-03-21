import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaNativoComponent } from './components/mapa-nativo/mapa-nativo.component';
import { MapaLibreriaComponent } from './components/mapa-libreria/mapa-libreria.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaNativoComponent,
    MapaLibreriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
