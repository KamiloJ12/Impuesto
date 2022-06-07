import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPredialComponent } from './add-predial.component';

describe('AddPredialComponent', () => {
  let component: AddPredialComponent;
  let fixture: ComponentFixture<AddPredialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPredialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
