import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuariosComponent } from './CrearUsuarios/Componente/crear-usuarios/crear-usuarios.component';

const routes: Routes = [
  {
    path: 'CrearUsuarios',
    component: CrearUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
