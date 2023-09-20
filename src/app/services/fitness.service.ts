import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { LineChartData } from '../models/chartData.interface';
@Injectable()
/**
 * @description
 * use this fitness service to
 * - calculate the avg of the data
 * - store the fitness values
 */
export class FitnessService {
  private _data$ = new BehaviorSubject<LineChartData | null>(null);
  constructor() {}

  get data$() {
    return this._data$.asObservable().pipe(filter(Boolean));
  }

  get avg$() {
    return this.data$.pipe(
      map((data) => {
        return data
          .map((d) => d.data)
          .reduce((sum, cur) => sum + cur / data.length, 0);
      })
    );
  }

  setData(data: LineChartData | null) {
    this._data$.next(data);
  }

  patchData(update: (data: LineChartData | null) => LineChartData | null) {
    const newValue = this._data$.value;
    if(newValue){
      const updated = update([...newValue]);
      this.setData(updated);
    }else{
      const updated = update([])
      this.setData([])
    }
  }
}
