import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;

@Component({
  selector: 'app-add-industria',
  templateUrl: './add-industria.component.html',
  styleUrls: ['./add-industria.component.scss']
})
export class AddIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  public token: any = '';
  public predial: any = {
    EsTienda : false,
    TipoPersona : 'Persona Natural'
  };
  public usuarios: Array<any> = [];
  
  constructor(private _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.init_data();
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

  init_data(): void{
    this._usuarioService.getUsuarios(this.token).subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        iziToast.show({
          backgroundColor: '#dc3424',
          class: 'text-danger',
          position: 'topRight',
          message: 'Ocurrio un error en el servidor',
          messageColor: '#FFFFFF',
          progressBarColor: '#FFFFFF'
        });
      }
    );
  }

  add(registroForm: NgForm): void{
    this._usuarioService.addIndustria(this.predial, this.token).subscribe(
      response => {
        iziToast.show({
          backgroundColor: '#52BE80 ',
          class: 'text-success',
          position: 'topRight',
          message: 'Se ha registrado un nuevo predial',
          messageColor: '#FFFFFF',
          progressBarColor: '#FFFFFF'
        });
      },
      error => {
        iziToast.show({
          backgroundColor: '#dc3424',
          class: 'text-danger',
          position: 'topRight',
          message: 'Ocurrio un error en el servidor',
          messageColor: '#FFFFFF',
          progressBarColor: '#FFFFFF'
        });
      }
    );
  }

}
