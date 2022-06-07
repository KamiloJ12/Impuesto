import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndustriaComponent } from './add-industria.component';

describe('AddIndustriaComponent', () => {
  let component: AddIndustriaComponent;
  let fixture: ComponentFixture<AddIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
