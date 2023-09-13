import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


/**
 * @description i use this component to add a header style to the background-image-card content
 */
@Component({
  selector: 'app-background-image-card-header',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './background-image-card-header.component.html',
  styleUrls: ['./background-image-card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundImageCardHeaderComponent {
 @Input() title!:string;
 @Input() icon!:string;
}
