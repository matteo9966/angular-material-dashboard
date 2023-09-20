import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-label-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatIconModule],
  templateUrl: './label-card.component.html',
  styleUrls: ['./label-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelCardComponent {
   @Input() title:string="";
   @Input() value:string="";
   @Input() iconName:string="fitness_center";
}
