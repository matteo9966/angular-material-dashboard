import { Injectable, inject } from '@angular/core';
import {

  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  breakpointObserver = inject(BreakpointObserver);
  constructor() {}
  get isSmallDevice$() {
    return this.breakpointObserver
      .observe([Breakpoints.XSmall,Breakpoints.Small])
      .pipe(map((obs) => obs.matches));
  }
}
