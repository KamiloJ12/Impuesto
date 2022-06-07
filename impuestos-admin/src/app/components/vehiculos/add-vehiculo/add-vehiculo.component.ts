import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.scss']
})
export class AddVehiculoComponent implements OnInit {

  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

}
