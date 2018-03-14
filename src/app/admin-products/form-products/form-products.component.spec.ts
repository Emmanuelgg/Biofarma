import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrductsComponent } from './form-products.component';

describe('FormPrductsComponent', () => {
  let component: FormPrductsComponent;
  let fixture: ComponentFixture<FormPrductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
