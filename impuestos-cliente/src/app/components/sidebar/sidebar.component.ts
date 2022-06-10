import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  impuetos():void {
    const collapseUtilities = document.querySelector('#collapseUtilities');
    if(collapseUtilities?.classList.contains('show')){
      collapseUtilities?.classList.remove('show');
    }else{
      collapseUtilities?.classList.add('show');
    }    
    
  }

}
