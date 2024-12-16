import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodsComponent } from './floods.component';

describe('FloodsComponent', () => {
  let component: FloodsComponent;
  let fixture: ComponentFixture<FloodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
