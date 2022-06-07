import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var iziToast: any;

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  public isSideNavCollapsed = true;
  public usuario:any = {};
  public token: any = "";

  constructor(private _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

  add(registroForm: NgForm): void{
    this.usuario.Password = this.usuario.Cedula;
    this._usuarioService.addUsuario(this.usuario, this.token).subscribe(
      response => {
        iziToast.show({
          backgroundColor: '#52BE80 ',
          class: 'text-success',
          position: 'topRight',
          message: 'Se ha registrado un nuevo cliente',
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
