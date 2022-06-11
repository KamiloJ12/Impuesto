import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var iziToast: any;

@Component({
  selector: 'app-vehiculo-cliente',
  templateUrl: './vehiculo-cliente.component.html',
  styleUrls: ['./vehiculo-cliente.component.scss']
})
export class VehiculoClienteComponent implements OnInit {

  public vehiculo:any = {};
  public impuestos:any = [];
  public placa = '';

  constructor(private _usuarioService: UsuarioService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.placa = params['id'];
        this._usuarioService.getVehiculoByPlaca(this.placa).subscribe(
          response=>{
            this.vehiculo = response;
            if(this.vehiculo){
              this._usuarioService.getImpuestoByVehiculoId(this.vehiculo.Id).subscribe(
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
