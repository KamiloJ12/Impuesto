import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var iziToast: any;

@Component({
  selector: 'app-industria-cliente',
  templateUrl: './industria-cliente.component.html',
  styleUrls: ['./industria-cliente.component.scss']
})
export class IndustriaClienteComponent implements OnInit {

  public industria:any = {};
  public impuestos:any = [];
  public nit = '';

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.nit = params['id'];
        this._usuarioService.getIndustriaByNit(this.nit).subscribe(
          response=>{
            this.industria = response;
            console.log(this.industria);
            if(this.industria){
              this._usuarioService.getImpuestoByVehiculoId(this.industria.Id).subscribe(
                response=>{
                  this.impuestos = response;
                  console.log(this.impuestos);
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
}
