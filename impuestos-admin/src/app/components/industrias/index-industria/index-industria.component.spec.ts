import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIndustriaComponent } from './index-industria.component';

describe('IndexIndustriaComponent', () => {
  let component: IndexIndustriaComponent;
  let fixture: ComponentFixture<IndexIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexIndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
