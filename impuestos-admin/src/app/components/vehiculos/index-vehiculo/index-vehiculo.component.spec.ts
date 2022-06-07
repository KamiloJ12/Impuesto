import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVehiculoComponent } from './index-vehiculo.component';

describe('IndexVehiculoComponent', () => {
  let component: IndexVehiculoComponent;
  let fixture: ComponentFixture<IndexVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
