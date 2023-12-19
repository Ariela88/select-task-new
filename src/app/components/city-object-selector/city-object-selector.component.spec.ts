import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityObjectSelectorComponent } from './city-object-selector.component';

describe('CityObjectSelectorComponent', () => {
  let component: CityObjectSelectorComponent;
  let fixture: ComponentFixture<CityObjectSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityObjectSelectorComponent]
    });
    fixture = TestBed.createComponent(CityObjectSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
