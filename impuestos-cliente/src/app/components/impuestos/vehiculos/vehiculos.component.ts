import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  public placa = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.router.navigate(['/vehiculo/', this.placa]);
  }

}
