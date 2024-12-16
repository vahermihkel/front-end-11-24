import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBooksComponent } from './supplier-books.component';

describe('SupplierBooksComponent', () => {
  let component: SupplierBooksComponent;
  let fixture: ComponentFixture<SupplierBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
