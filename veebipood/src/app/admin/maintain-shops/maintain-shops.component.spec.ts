import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainShopsComponent } from './maintain-shops.component';

describe('MaintainShopsComponent', () => {
  let component: MaintainShopsComponent;
  let fixture: ComponentFixture<MaintainShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintainShopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
