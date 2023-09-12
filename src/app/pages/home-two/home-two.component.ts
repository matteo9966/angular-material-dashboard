import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { DashboardMenuComponent } from 'src/app/components/dashboard-menu/dashboard-menu.component';
import { FixedFabButtonComponent } from 'src/app/components/fixed-fab-button/fixed-fab-button.component';
import { DashboardToolbarComponent } from 'src/app/components/dashboard-toolbar/dashboard-toolbar.component';
@Component({
  selector: 'app-home-two',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule,DashboardMenuComponent,FixedFabButtonComponent,DashboardToolbarComponent],
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTwoComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
  }
}
