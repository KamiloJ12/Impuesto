import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;


@Component({
  selector: 'app-update-industria',
  templateUrl: './update-industria.component.html',
  styleUrls: ['./update-industria.component.scss']
})
export class UpdateIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  public usuarios: Array<any> = [];
  public token: any = '';
  public id: any = '';
  public industria: any = {};

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) {
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.init_data();

    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        
        this._usuarioService.getIndustriaById(this.id,this.token).subscribe(
          response=>{
            this.industria = response;
            console.log(this.industria);
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
    );
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

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

  update(registroForm: NgForm): void {
    this._usuarioService.updateIndustria(this.industria, this.token).subscribe(
      response=>{
        iziToast.show({
          backgroundColor: '#52BE80 ',
          class: 'text-success',
          position: 'topRight',
          message: 'Se ha actualizado la industria correctamente',
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
