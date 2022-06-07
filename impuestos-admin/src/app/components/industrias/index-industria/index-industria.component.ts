import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-index-industria',
  templateUrl: './index-industria.component.html',
  styleUrls: ['./index-industria.component.scss']
})
export class IndexIndustriaComponent implements OnInit {

  public isSideNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
  }

}
