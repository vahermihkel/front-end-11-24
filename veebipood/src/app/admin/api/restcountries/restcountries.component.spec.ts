import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcountriesComponent } from './restcountries.component';

describe('RestcountriesComponent', () => {
  let component: RestcountriesComponent;
  let fixture: ComponentFixture<RestcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestcountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
