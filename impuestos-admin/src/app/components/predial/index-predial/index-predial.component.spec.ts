import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPredialComponent } from './index-predial.component';

describe('IndexPredialComponent', () => {
  let component: IndexPredialComponent;
  let fixture: ComponentFixture<IndexPredialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPredialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
