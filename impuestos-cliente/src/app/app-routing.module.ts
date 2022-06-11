import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { IndustriaClienteComponent } from './components/impuestos/industria-cliente/industria-cliente.component';
import { IndustriaComponent } from './components/impuestos/industria/industria.component';
import { PredialClienteComponent } from './components/impuestos/predial-cliente/predial-cliente.component';
import { PredialComponent } from './components/impuestos/predial/predial.component';
import { VehiculoClienteComponent } from './components/impuestos/vehiculo-cliente/vehiculo-cliente.component';
import { VehiculosComponent } from './components/impuestos/vehiculos/vehiculos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MisionyvisionComponent } from './components/misionyvision/misionyvision.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'misionyvision', component: MisionyvisionComponent},

  {path: 'predial', children: [
    {path: '', component: PredialComponent},
    {path: ':id', component: PredialClienteComponent},
  ]},

  {path: 'vehiculo', children: [
    {path: '', component: VehiculosComponent},
    {path: ':id', component: VehiculoClienteComponent},
  ]},

  {path: 'industria', children: [
    {path: '', component: IndustriaComponent},
    {path: ':id', component: IndustriaClienteComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
