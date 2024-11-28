import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TootajadComponent } from './tootajad.component';

describe('TootajadComponent', () => {
  let component: TootajadComponent;
  let fixture: ComponentFixture<TootajadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TootajadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TootajadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
