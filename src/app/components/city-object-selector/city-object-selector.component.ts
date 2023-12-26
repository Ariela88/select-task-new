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
  selectedCityFlags: boolean[] = [];
  allCitiesSelected = false;
  showDropdown = false;
  selectedCities: City[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

  filteredCities: City[] = [];
  cityInput: string = '';
  

  filterCities() {
    this.filteredCities = this.cities.filter((city) =>
      city.nome.toLowerCase().includes(this.cityInput.toLowerCase())
    );
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  selectCity(city: City) {
    if (!this.selectedCities.some((c) => c.id === city.id) && this.selectedCities.length < 3) {
      this.selectedCities.push(city);
      this.onChange(this.selectedCities);
      this.cityInput = '';
      this.filteredCities = [];
      city.selected = true
    } else{
      alert('puoi selezionare al massimo 3 città')
    }

   
  }

  writeValue(value: any): void {
    // this.selectedCityFlags = new Array(this.cities.length).fill(false);
    // if (value && value.length > 0) {
    //   value.forEach((city: { id: number }) => {
    //     const index = this.cities.findIndex((c) => c.id === city.id);
    //     if (index !== -1) {
    //       this.selectedCityFlags[index] = true;
    //     }
    //   });
    // }
    // this.checkIfAllCitiesSelected();

    this.cityInput = '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  toggleSelection(index: number): void {
    this.selectedCityFlags[index] = !this.selectedCityFlags[index];
    this.checkIfAllCitiesSelected();
    const selectedCities = this.cities.filter(
      (_, i) => this.selectedCityFlags[i]
    );
    this.onChange(selectedCities);
  }

  private checkIfAllCitiesSelected(): void {
    this.allCitiesSelected = this.selectedCityFlags.every((flag) => flag);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectedIndex: number = -1
  onKeyUp(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this.scrollIntoView();
        break;
      case 'ArrowDown':
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredCities.length - 1);
        this.scrollIntoView();
        break;
      case 'Enter':
        this.onEnter();
        break;
      default:
        this.filterCities(); 
        break;
    }
  }

  scrollIntoView(): void {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredCities.length) {
      const selectedElement = document.querySelector('.filtered-cities li.selected');
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  }

  onEnter(): void {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredCities.length) {
      this.selectCity(this.filteredCities[this.selectedIndex]);
    }
  }
  
}
