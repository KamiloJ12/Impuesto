import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriaComponent } from './industria.component';

describe('IndustriaComponent', () => {
  let component: IndustriaComponent;
  let fixture: ComponentFixture<IndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
