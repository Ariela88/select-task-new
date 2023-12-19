import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { City } from 'src/app/city';

@Component({
  selector: 'app-city-object-selector',
  templateUrl: './city-object-selector.component.html',
  styleUrls: ['./city-object-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CityObjectSelectorComponent),
      multi: true,
    },
  ],
})
export class CityObjectSelectorComponent implements ControlValueAccessor {

  @Input() cities: City[] = [];

  selectedCity?: City;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.selectedCity = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

}
