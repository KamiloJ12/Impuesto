import { Component, OnInit, Input } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-index-vehiculo',
  templateUrl: './index-vehiculo.component.html',
  styleUrls: ['./index-vehiculo.component.scss']
})
export class IndexVehiculoComponent implements OnInit {


  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }


}
