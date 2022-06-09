import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { UpdateUsuarioComponent } from './components/usuarios/update-usuario/update-usuario.component';
import { IndexPredialComponent } from './components/predial/index-predial/index-predial.component';
import { AddPredialComponent } from './components/predial/add-predial/add-predial.component';
import { UpdatePredialComponent } from './components/predial/update-predial/update-predial.component';
import { IndexIndustriaComponent } from './components/industrias/index-industria/index-industria.component';
import { AddIndustriaComponent } from './components/industrias/add-industria/add-industria.component';
import { UpdateIndustriaComponent } from './components/industrias/update-industria/update-industria.component';
import { IndexVehiculoComponent } from './components/vehiculos/index-vehiculo/index-vehiculo.component';
import { AddVehiculoComponent } from './components/vehiculos/add-vehiculo/add-vehiculo.component';
import { UpdateVehiculoComponent } from './components/vehiculos/update-vehiculo/update-vehiculo.component';
import { ImpuestosIndustriaComponent } from './components/industrias/impuestos-industria/impuestos-industria.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: NavbarComponent},

  {path: 'usuarios', children: [
    {path: '', component: IndexUsuarioComponent},
    {path: 'add', component: AddUsuarioComponent},
    {path: ':id', component: UpdateUsuarioComponent},
  ]},

  {path: 'predial', children: [
    {path: '', component: IndexPredialComponent},
    {path: 'add', component: AddPredialComponent},
    {path: ':id', component: UpdatePredialComponent},
  ]},

  {path: 'industriaycomercio', children: [
    {path: '', component: IndexIndustriaComponent},
    {path: 'add', component: AddIndustriaComponent},
    {path: 'impuestos', component: ImpuestosIndustriaComponent},
    {path: ':id', component: UpdateIndustriaComponent},
  ]},

  {path: 'vehiculos', children: [
    {path: '', component: IndexVehiculoComponent},
    {path: 'add', component: AddVehiculoComponent},
    {path: ':id', component: UpdateVehiculoComponent},
  ]},

  {path: 'pagos', children: [
    {path: '', component: IndexVehiculoComponent},
    {path: 'add', component: AddVehiculoComponent},
    {path: ':id', component: UpdateUsuarioComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
