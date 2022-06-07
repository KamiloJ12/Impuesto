import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIndustriaComponent } from './update-industria.component';

describe('UpdateIndustriaComponent', () => {
  let component: UpdateIndustriaComponent;
  let fixture: ComponentFixture<UpdateIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIndustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
