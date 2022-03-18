import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumToArrayPipe } from './pipes/num-to-array.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitalizePipe,
    NumToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es_ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
