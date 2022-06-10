import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var iziToast: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: any = {};
  public token: string|null = "";

  constructor(private _usuarioService: UsuarioService, private _router: Router) {
    this.token = this._usuarioService.getToken();
   }

  ngOnInit(): void {
    if(this.token){
      this._router.navigate(['/usuarios']);
    }
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      let data = {
        email: this.usuario.Email,
        password: this.usuario.Password
      }
      this._usuarioService.login(data).subscribe(
        response => {
          if(response.user.Rol == "Superadministrador" || response.user.Rol == "Administrador"){
            localStorage.setItem('token', response.tokenReturn);
            localStorage.setItem('_id', response.user.Id);
            localStorage.setItem('_rol', response.user.Rol);
            this._router.navigate(['/usuarios']);
        
          }else{
            iziToast.show({
              backgroundColor: '#dc3424',
              class: 'text-danger',
              position: 'topRight',
              message: "Usuario no tiene permisos",
              messageColor: '#FFFFFF',
              progressBarColor: '#FFFFFF'
            });  
          } 
        },
        error => {
          iziToast.show({
            backgroundColor: '#dc3424',
            class: 'text-danger',
            position: 'topRight',
            message: error.error.message,
            messageColor: '#FFFFFF',
            progressBarColor: '#FFFFFF'
          });
        }
      );
    }else {
      iziToast.show({
        backgroundColor: '#dc3424',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos',
        messageColor: '#FFFFFF',
        progressBarColor: '#FFFFFF'
      });
    }

  }

}
