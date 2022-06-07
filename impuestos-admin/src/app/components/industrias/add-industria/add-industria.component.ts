import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-add-industria',
  templateUrl: './add-industria.component.html',
  styleUrls: ['./add-industria.component.scss']
})
export class AddIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

}
