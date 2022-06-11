import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriaClienteComponent } from './industria-cliente.component';

describe('IndustriaClienteComponent', () => {
  let component: IndustriaClienteComponent;
  let fixture: ComponentFixture<IndustriaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
