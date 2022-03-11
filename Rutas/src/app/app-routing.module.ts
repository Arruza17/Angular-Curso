import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { InfoComponent } from './componentes/info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'informacion' },
  { path: 'informacion', component: InfoComponent },
  { path: 'about', redirectTo: 'sobre' },
  { path: 'sobre', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  {
    path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
      { path: 'proyectos', component: ProyectosComponent},
      { path: 'curriculum', component: CurriculumComponent},
      { path: 'experiencia', component: ExperienciaComponent}

    ]
  },
  { path: '**', redirectTo: 'contacto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
