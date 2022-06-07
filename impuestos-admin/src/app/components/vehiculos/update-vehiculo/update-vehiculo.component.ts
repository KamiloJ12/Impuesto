import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-update-vehiculo',
  templateUrl: './update-vehiculo.component.html',
  styleUrls: ['./update-vehiculo.component.scss']
})
export class UpdateVehiculoComponent implements OnInit {

  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }
}
