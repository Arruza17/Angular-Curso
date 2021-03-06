import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaLibreriaComponent } from './components/mapa-libreria/mapa-libreria.component';
import { MapaNativoComponent } from './components/mapa-nativo/mapa-nativo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nativo'},
  { path: 'nativo', component: MapaNativoComponent},
  { path: 'libreria', component: MapaLibreriaComponent},
  { path: '**', redirectTo: 'nativo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
