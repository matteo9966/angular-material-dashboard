import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu-links-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './dashboard-menu-links-panel.component.html',
  styleUrls: ['./dashboard-menu-links-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMenuLinksPanelComponent {
  @Input() dashboardPanel: {
    icon: string;
    title: string;
    links: { label: string; routerLink: string }[];
  }[] = [];
}
