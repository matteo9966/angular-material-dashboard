import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {


  private _isDark$ = new BehaviorSubject(false);

  _isDark = false;
  private darkIcon = 'dark_mode';
  private lightIcon = 'light_mode';

  constructor() {
  }

  get currentIcon() {
    if (this.isDark) {
      return this.darkIcon;
    }
    return this.lightIcon;
  }

  toggleMode() {
    this.isDark = !this.isDark; 
  }



  get isDark() {
    return this._isDark;
  }
  set isDark(isDark: boolean) {
    this._isDark$.next(isDark);
    this._isDark = isDark;
  }

  get isDark$() {
    return this._isDark$.asObservable();
  }
}
