import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DashboardCard } from 'src/app/models/dashboard-card.interface';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent {
  @Input() dashboardCard!:DashboardCard;

  get price(){
     return this.dashboardCard.price
  }
  get description(){
     return this.dashboardCard.description
  }
  get title(){
     return this.dashboardCard.title
  }
  get alt(){
     return this.dashboardCard.alt
  }
  get location(){
     return this.dashboardCard.location
  }
  get imageSrc(){
     return this.dashboardCard.imageSrc
  }
}
