import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardToolbarComponent } from 'src/app/components/dashboard-toolbar/dashboard-toolbar.component';
import { FixedFabButtonComponent } from 'src/app/components/fixed-fab-button/fixed-fab-button.component';
import { DashboardMenuComponent } from 'src/app/components/dashboard-menu/dashboard-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ResponsiveService } from 'src/app/services/responsive-service.service';
import { BehaviorSubject, map, merge, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardMenuService } from 'src/app/services/dashboard-menu.service';
/**
 * @description this is the dashboard of home-two component. all components in home two will ave a description
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    DashboardMenuComponent,
    FixedFabButtonComponent,
    DashboardToolbarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DashboardMenuService,
      useFactory: (responsiveService: ResponsiveService) => {
        return new DashboardMenuService(responsiveService);
      },
      deps: [ResponsiveService],
    },
  ],
})
export class DashboardComponent {
  private dashboardMenuService = inject(DashboardMenuService);

  get showSidenav$() {
    return this.dashboardMenuService.showSidenav$;
  }

  get sidenavType$() {
    return this.dashboardMenuService.sidenavType$;
  }

  get showSmallDeviceMenuButton$() {
    return this.dashboardMenuService.showSmallDeviceMenuButton$;
  }

  toggleMenu() {
    this.dashboardMenuService.toggleMenu();
  }
}
