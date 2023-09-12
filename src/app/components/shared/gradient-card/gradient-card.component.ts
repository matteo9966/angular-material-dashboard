import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-gradient-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './gradient-card.component.html',
  styleUrls: ['./gradient-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradientCardComponent {
 @Input() gradientClass:string='default-gradient';
 @Input() iconSrc!:string;
 @Input() title!:string;
 @Input() subtitle!:string;
 
}
