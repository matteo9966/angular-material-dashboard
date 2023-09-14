import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-title-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleCardComponent {

}
