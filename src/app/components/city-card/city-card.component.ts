import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/app/city';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  @Input() city?: City;
  @Output() removeCity: EventEmitter<City> = new EventEmitter<City>();

  selectedCities: City[] = [];

  removeCityAction(city: City | undefined): void {
    if (city) {
     
      this.removeCity.emit(city);
    }
  }
}
