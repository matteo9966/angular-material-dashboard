import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-background-image-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './background-image-card.component.html',
  styleUrls: ['./background-image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundImageCardComponent {
  @Input({required:true}) backgroundSrc!:string;
}
