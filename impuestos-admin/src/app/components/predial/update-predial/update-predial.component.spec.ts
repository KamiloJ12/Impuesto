import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePredialComponent } from './update-predial.component';

describe('UpdatePredialComponent', () => {
  let component: UpdatePredialComponent;
  let fixture: ComponentFixture<UpdatePredialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePredialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
