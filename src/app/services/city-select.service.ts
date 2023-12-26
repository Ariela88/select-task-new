import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitySelectService {

  private citySearchInputSubject = new Subject<string>();

  sendCitySearchInput(input: string): void {
    this.citySearchInputSubject.next(input);
  }

  getCitySearchInput(): Observable<string> {
    return this.citySearchInputSubject.asObservable();
  }

}
