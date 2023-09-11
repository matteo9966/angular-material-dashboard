import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-where-to-find-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './where-to-find-us.component.html',
  styleUrls: ['./where-to-find-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhereToFindUsComponent {

}
