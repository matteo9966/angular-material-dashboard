import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardToolbarSearchComponent } from '../dashboard-toolbar-search/dashboard-toolbar-search.component';
@Component({
  selector: 'app-dashboard-toolbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule,DashboardToolbarSearchComponent],
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardToolbarComponent {}
