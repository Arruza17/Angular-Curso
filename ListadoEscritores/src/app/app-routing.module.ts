import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: ListadoComponent },
  { path: 'escritores/:escritorId', component: DetalleEscritorComponent },
  { path: '**', redirectTo:'escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
