import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { LibrosEscritorComponent } from './components/libros-escritor/libros-escritor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleEscritorComponent,
    LibrosEscritorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
