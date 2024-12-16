import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierStoreComponent } from './supplier-store.component';

describe('SupplierStoreComponent', () => {
  let component: SupplierStoreComponent;
  let fixture: ComponentFixture<SupplierStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
