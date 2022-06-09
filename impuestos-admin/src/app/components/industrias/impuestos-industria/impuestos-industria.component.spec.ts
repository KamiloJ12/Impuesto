import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosIndustriaComponent } from './impuestos-industria.component';

describe('ImpuestosIndustriaComponent', () => {
  let component: ImpuestosIndustriaComponent;
  let fixture: ComponentFixture<ImpuestosIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestosIndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
