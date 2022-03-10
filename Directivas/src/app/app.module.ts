import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './components/semaforo/semaforo.component';
import { BuclesComponent } from './components/bucles/bucles.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    BuclesComponent,
    SwitchComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
