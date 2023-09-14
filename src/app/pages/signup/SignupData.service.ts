import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, debounceTime } from 'rxjs';
@Injectable()
export class SignupDataService {
  http = inject(HttpClient);

  getCountries(input: string) {
    console.log('get countries')
    return this.http.get(`https://restcountries.com/v3.1/name/${input}?fields=name`)
  }
}
