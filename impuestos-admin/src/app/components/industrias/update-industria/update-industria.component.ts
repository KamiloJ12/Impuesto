import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-update-industria',
  templateUrl: './update-industria.component.html',
  styleUrls: ['./update-industria.component.scss']
})
export class UpdateIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

}
