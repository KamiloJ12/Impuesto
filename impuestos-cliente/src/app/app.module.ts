import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PredialComponent } from './components/impuestos/predial/predial.component';
import { MisionyvisionComponent } from './components/misionyvision/misionyvision.component';
import { VehiculosComponent } from './components/impuestos/vehiculos/vehiculos.component';
import { IndustriaComponent } from './components/impuestos/industria/industria.component';
import { PredialClienteComponent } from './components/impuestos/predial-cliente/predial-cliente.component';
import { IndustriaClienteComponent } from './components/impuestos/industria-cliente/industria-cliente.component';
import { VehiculoClienteComponent } from './components/impuestos/vehiculo-cliente/vehiculo-cliente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    ContactenosComponent,
    PredialComponent,
    MisionyvisionComponent,
    VehiculosComponent,
    IndustriaComponent,
    PredialClienteComponent,
    IndustriaClienteComponent,
    VehiculoClienteComponent
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
