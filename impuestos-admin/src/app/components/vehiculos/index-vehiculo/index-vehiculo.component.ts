import { Component, OnInit, Input } from '@angular/core';


import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;

@Component({
  selector: 'app-index-vehiculo',
  templateUrl: './index-vehiculo.component.html',
  styleUrls: ['./index-vehiculo.component.scss']
})
export class IndexVehiculoComponent implements OnInit {


  public isSideNavCollapsed = true;
  public vehiculos: Array<any> = [];
  public token: any = "";

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
    this._usuarioService.getVehiculos(this.token).subscribe(
      response => {
        this.vehiculos = response;
        console.log(this.vehiculos);
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
