import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredialClienteComponent } from './predial-cliente.component';

describe('PredialClienteComponent', () => {
  let component: PredialClienteComponent;
  let fixture: ComponentFixture<PredialClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredialClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredialClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
