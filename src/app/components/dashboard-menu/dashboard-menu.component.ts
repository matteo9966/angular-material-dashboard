import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardMenuLinksPanelComponent } from '../dashboard-menu-links-panel/dashboard-menu-links-panel.component';
import { ROUTES_CONFIG } from 'src/app/config/routes.injection';

//this is a component of the new dashboard page
@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    DashboardMenuLinksPanelComponent,
  ],
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMenuComponent {
  routesConfig = inject(ROUTES_CONFIG);

  dashboardPanel: {
    icon: string;
    title: string;
    links: { label: string; routerLink: string }[];
  }[] = [
    {
      icon: 'account_circle',
      title: 'Dashboard',
      links: [
        {
          label: this.routesConfig.dashboard.childRoutes.home.label,
          routerLink: this.routesConfig.dashboard.childRoutes.home.routerLink,
        },
        {
          label: this.routesConfig.dashboard.childRoutes.tableData.label,
          routerLink:
            this.routesConfig.dashboard.childRoutes.tableData.routerLink,
        },
        {
          label: this.routesConfig.dashboard.childRoutes.profile.label,
          routerLink:
            this.routesConfig.dashboard.childRoutes.profile.routerLink,
        },
      ],
    },
  ];
}
