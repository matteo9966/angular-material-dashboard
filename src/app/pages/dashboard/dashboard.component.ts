import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardToolbarComponent } from 'src/app/components/dashboard-toolbar/dashboard-toolbar.component';
import { FixedFabButtonComponent } from 'src/app/components/fixed-fab-button/fixed-fab-button.component';
import { DashboardMenuComponent } from 'src/app/components/dashboard-menu/dashboard-menu.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
/**
 * @description this is the dashboard of home-two component. all components in home two will ave a description
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatSidenavModule,DashboardMenuComponent,FixedFabButtonComponent,DashboardToolbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
