import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'formulario' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent},
  { path: '**', redirectTo: 'formulario'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
