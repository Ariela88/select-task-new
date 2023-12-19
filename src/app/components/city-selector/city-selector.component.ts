import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-city-selector',
  template: `
    <select [ngModel]="selectedCity" (ngModelChange)="onChange($event)">
      <option *ngFor="let city of cities" [value]="city">{{ city }}</option>
    </select>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CitySelectorComponent),
      multi: true,
    },
  ],
})
export class CitySelectorComponent implements ControlValueAccessor {
  @Input() cities: string[] = [];
  selectedCity?: string;

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
    // You can implement this method if you want to handle disabling the component
  }
}
