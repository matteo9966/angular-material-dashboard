import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  map,
  debounceTime,
  of,
  catchError,
} from 'rxjs';
@Injectable()
export class SignupDataService {
  http = inject(HttpClient);

  private getCountries(input: string) {
    return this.http
      .get(`https://restcountries.com/v3.1/name/${input}?fields=name`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of([]);
        })
      );
  }

  constructor() {
    this.dataSourceObervableFunction =
      this.dataSourceObervableFunction.bind(this);
  }

  /**
   *
   * @param data the search input data that i will use to get the data
   * @returns
   */
  dataSourceObervableFunction(data: string): Observable<any> {
    return this.getCountries(data).pipe(
      map((data) => {
        return (<any[]>data).map(
          (d) => `${d?.name?.common} (${d?.name?.official})` || ''
        );
      })
    );
  }
}
