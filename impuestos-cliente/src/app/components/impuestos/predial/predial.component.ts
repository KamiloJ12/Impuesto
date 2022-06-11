import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-predial',
  templateUrl: './predial.component.html',
  styleUrls: ['./predial.component.scss']
})
export class PredialComponent implements OnInit {

  public numCuenta = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.router.navigate(['/predial/', this.numCuenta]);
  }

}
