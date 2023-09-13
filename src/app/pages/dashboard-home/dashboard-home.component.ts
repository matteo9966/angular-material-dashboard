import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from 'src/app/components/dashboard-card/dashboard-card.component';
import { DashboardCard } from 'src/app/models/dashboard-card.interface';
import { BackgroundImageCardComponent } from 'src/app/components/background-image-card/background-image-card.component';
import { MatIconModule } from '@angular/material/icon';
import { BackgroundImageCardHeaderComponent } from 'src/app/components/background-image-card-header/background-image-card-header.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, DashboardCardComponent,BackgroundImageCardComponent,MatIconModule,BackgroundImageCardHeaderComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomeComponent {
  homeCards: DashboardCard[] = [
    {
      alt: 'rent a house image',
      description: 'Rent the best homes wherever in the world',
      imageSrc: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-2-min.jpg',
      location: 'Vienna',
      price: '225$',
      title: 'Rent a house',
    },
    {
      alt: 'Buy a house image',
      description: 'Buy the best homes wherever in the world',
      imageSrc: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-3-min.jpg',
      location: 'Bucarest',
      price: '225.995$',
      title: 'Buy a house',
    },
    {
      alt: 'Build a new house image',
      description: 'Build a new the best homes wherever in the world',
      imageSrc: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-1-min.jpg',
      location: 'Greece',
      price: '113.225$',
      title: 'Build a new  house',
    },
  ];
}
