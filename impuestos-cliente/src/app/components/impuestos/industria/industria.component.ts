import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-industria',
  templateUrl: './industria.component.html',
  styleUrls: ['./industria.component.scss']
})
export class IndustriaComponent implements OnInit {

  public nit = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.router.navigate(['/industria/', this.nit]);
  }

}
