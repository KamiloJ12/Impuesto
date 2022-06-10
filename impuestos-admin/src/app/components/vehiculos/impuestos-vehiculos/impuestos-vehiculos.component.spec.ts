import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosVehiculosComponent } from './impuestos-vehiculos.component';

describe('ImpuestosVehiculosComponent', () => {
  let component: ImpuestosVehiculosComponent;
  let fixture: ComponentFixture<ImpuestosVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestosVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
