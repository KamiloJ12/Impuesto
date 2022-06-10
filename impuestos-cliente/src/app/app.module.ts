import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
