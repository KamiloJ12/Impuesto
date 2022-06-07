import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var iziToast: any;

interface SideNavToggle {
  collapsed: boolean;
}
@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.scss']
})
export class UpdateUsuarioComponent implements OnInit {

  public isSideNavCollapsed = true;
  public usuario: any = {};
  public token: any = '';
  public id: any = {};

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) {
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        
        this._usuarioService.getUsuarioById(this.id,this.token).subscribe(
          response=>{
            this.usuario = response;
          },
          error=>{
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
    )
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

  update(registroForm: NgForm): void {
    this._usuarioService.updateUsuario(this.usuario, this.token).subscribe(
      response=>{
        console.log(response);
        iziToast.show({
          backgroundColor: '#52BE80 ',
          class: 'text-success',
          position: 'topRight',
          message: 'Se ha actualizado el usuario',
          messageColor: '#FFFFFF',
          progressBarColor: '#FFFFFF'
        });
      }, error=>{
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
