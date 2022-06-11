import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MisionyvisionComponent } from './components/misionyvision/misionyvision.component';
import { FuncionesComponent } from './components/funciones/funciones.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'misionyvision', component: MisionyvisionComponent},
  {path: 'funciones', component: FuncionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
