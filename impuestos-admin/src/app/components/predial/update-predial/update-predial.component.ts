import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;

@Component({
  selector: 'app-update-predial',
  templateUrl: './update-predial.component.html',
  styleUrls: ['./update-predial.component.scss']
})
export class UpdatePredialComponent implements OnInit {

  public isSideNavCollapsed = true;
  public usuarios: Array<any> = [];
  public token: any = '';
  public id: any = '';
  public predial: any = {};

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) {
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.init_data();

    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        
        this._usuarioService.getPredialById(this.id,this.token).subscribe(
          response=>{
            this.predial = response;
            console.log(this.predial);
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
        console.log(this.usuarios);
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

  areaConstruida(): void {
    if(this.predial.AreaConstruida > this.predial.AreaTerritorio ){
      iziToast.show({
        backgroundColor: '#dc3424',
        class: 'text-danger',
        position: 'topRight',
        message: 'Area Construida Mayor al Area Territorial',
        messageColor: '#FFFFFF',
        progressBarColor: '#FFFFFF'
      });
      this.predial.AreaConstruida = '';
    }
  }

  update(registroForm: NgForm): void {
    this._usuarioService.updatePredial(this.predial, this.token).subscribe(
      response=>{
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
