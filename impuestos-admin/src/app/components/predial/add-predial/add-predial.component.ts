import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;

@Component({
  selector: 'app-add-predial',
  templateUrl: './add-predial.component.html',
  styleUrls: ['./add-predial.component.scss']
})
export class AddPredialComponent implements OnInit {

  public isSideNavCollapsed = true;
  public usuarios: Array<any> = [];
  public token: any = "";
  public predial: any = {
    Destino: "Habitacional",
    Estrato: 1
  };

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

  add(registroForm: NgForm): void{
    this._usuarioService.addPredial(this.predial, this.token).subscribe(
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

}
