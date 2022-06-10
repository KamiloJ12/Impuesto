import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosPredialComponent } from './impuestos-predial.component';

describe('ImpuestosPredialComponent', () => {
  let component: ImpuestosPredialComponent;
  let fixture: ComponentFixture<ImpuestosPredialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestosPredialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
