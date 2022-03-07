import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumaComponent } from './suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    EventosComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
