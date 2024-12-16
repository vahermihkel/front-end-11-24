import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEscuelaComponent } from './supplier-escuela.component';

describe('SupplierEscuelaComponent', () => {
  let component: SupplierEscuelaComponent;
  let fixture: ComponentFixture<SupplierEscuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierEscuelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
