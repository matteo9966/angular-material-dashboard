import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {  MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard-menu-links-panel',
  standalone: true,
  imports: [CommonModule,MatExpansionModule,MatIconModule],
  templateUrl: './dashboard-menu-links-panel.component.html',
  styleUrls: ['./dashboard-menu-links-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMenuLinksPanelComponent {

}
