import { Injectable } from '@angular/core';
import { BehaviorSubject, map, merge,startWith } from 'rxjs';
import { ResponsiveService } from './responsive-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Injectable()
export class DashboardMenuService {
  private showMenu$ = new BehaviorSubject(true); 
  private isSmallDevice=false;
  constructor(private responsiveService:ResponsiveService) { 
    this.responsiveService.isSmallDevice$.subscribe((isSmall) => {
      if (isSmall) {
        this.isSmallDevice=true
        this.showMenu$.next(false);
      } else {
        this.isSmallDevice=false;
        this.showMenu$.next(true);
      }
    });


  }

  toggleMenu() {
    const showing = this.showMenu$.value;
    this.showMenu$.next(!showing);
  }

  get sidenavType$() {
    return this.responsiveService.isSmallDevice$.pipe(
      map((isSmall) => {
        if (isSmall) {
          return 'over';
        }
        return 'side';
      })
    );
  }

  get showSidenav$() {
    // return this.responsiveService.isSmallDevice$.pipe(map((x) => !x));
    return this.showMenu$.asObservable();
  }

  get showSmallDeviceMenuButton$(){
    return this.responsiveService.isSmallDevice$.pipe(startWith(false));
  }

  //call this function when clicking on the navbar navigation items
  toggleSidenavOnSmallDevice(){
    if(this.isSmallDevice){
      this.toggleMenu();
    }
  }

  
}
