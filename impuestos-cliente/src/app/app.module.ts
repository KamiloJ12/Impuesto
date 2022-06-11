import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PredialComponent } from './components/impuestos/predial/predial.component';
import { MisionyvisionComponent } from './components/misionyvision/misionyvision.component';
import { FuncionesComponent } from './components/funciones/funciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    ContactenosComponent,
    PredialComponent,
    MisionyvisionComponent,
    FuncionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
