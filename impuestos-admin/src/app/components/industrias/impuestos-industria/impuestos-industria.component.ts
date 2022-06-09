import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';

interface SideNavToggle {
  collapsed: boolean;
}

declare var iziToast: any;
@Component({
  selector: 'app-impuestos-industria',
  templateUrl: './impuestos-industria.component.html',
  styleUrls: ['./impuestos-industria.component.scss']
})
export class ImpuestosIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  public impuestos: any = [];
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
    this._usuarioService.getImpuestosIndustrias(this.token).subscribe(
      response => {
        this.impuestos = response;
        console.log(this.impuestos);
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
