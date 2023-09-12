import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { DashboardMenuLinksPanelComponent } from '../dashboard-menu-links-panel/dashboard-menu-links-panel.component';
//this is a component of the new dashboard page
@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatDividerModule,DashboardMenuLinksPanelComponent],
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMenuComponent {

}
