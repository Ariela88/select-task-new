import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCityComponent } from './insert-city.component';

describe('InsertCityComponent', () => {
  let component: InsertCityComponent;
  let fixture: ComponentFixture<InsertCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCityComponent]
    });
    fixture = TestBed.createComponent(InsertCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
