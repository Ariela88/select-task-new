import { Component } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities: City[] = [ 
    { regione: 'Liguria', id: 1, provincia: 'GE', descrizione: 'Genova' },
    { regione: 'Lombardia', id: 2, provincia: 'MI', descrizione: 'Milano' },
    { regione: 'Lazio', id: 3, provincia: 'RO', descrizione: 'Roma' },
    { regione: 'Lombardia', id: 2, provincia: 'MI', descrizione: 'Milano' },
  ];
  
  selectedCity?:City;
}
