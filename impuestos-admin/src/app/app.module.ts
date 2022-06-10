import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { UpdateUsuarioComponent } from './components/usuarios/update-usuario/update-usuario.component';
import { IndexPredialComponent } from './components/predial/index-predial/index-predial.component';
import { AddPredialComponent } from './components/predial/add-predial/add-predial.component';
import { UpdatePredialComponent } from './components/predial/update-predial/update-predial.component';
import { AddVehiculoComponent } from './components/vehiculos/add-vehiculo/add-vehiculo.component';
import { UpdateVehiculoComponent } from './components/vehiculos/update-vehiculo/update-vehiculo.component';
import { IndexVehiculoComponent } from './components/vehiculos/index-vehiculo/index-vehiculo.component';
import { IndexIndustriaComponent } from './components/industrias/index-industria/index-industria.component';
import { AddIndustriaComponent } from './components/industrias/add-industria/add-industria.component';
import { UpdateIndustriaComponent } from './components/industrias/update-industria/update-industria.component';
import { ImpuestosIndustriaComponent } from './components/industrias/impuestos-industria/impuestos-industria.component';
import { ImpuestosVehiculosComponent } from './components/vehiculos/impuestos-vehiculos/impuestos-vehiculos.component';
import { ImpuestosPredialComponent } from './components/predial/impuestos-predial/impuestos-predial.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexUsuarioComponent,
    AddUsuarioComponent,
    UpdateUsuarioComponent,
    IndexPredialComponent,
    AddPredialComponent,
    UpdatePredialComponent,
    AddVehiculoComponent,
    UpdateVehiculoComponent,
    IndexVehiculoComponent,
    IndexIndustriaComponent,
    AddIndustriaComponent,
    UpdateIndustriaComponent,
    ImpuestosIndustriaComponent,
    ImpuestosVehiculosComponent,
    ImpuestosPredialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
