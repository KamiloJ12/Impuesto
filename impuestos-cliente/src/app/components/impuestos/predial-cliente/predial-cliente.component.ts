import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var iziToast: any;

@Component({
  selector: 'app-predial-cliente',
  templateUrl: './predial-cliente.component.html',
  styleUrls: ['./predial-cliente.component.scss']
})
export class PredialClienteComponent implements OnInit {

  public predial:any = {};
  public impuestos:any = [];
  public nit = '';

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.nit = params['id'];
        this._usuarioService.getPredialByNit(this.nit).subscribe(
          response=>{
            this.predial = response;
            console.log(this.predial);
            if(this.predial){
              this._usuarioService.getImpuestoByPredialId(this.predial.Id).subscribe(
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
