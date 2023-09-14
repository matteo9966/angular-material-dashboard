import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-form-wrapper',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWrapperComponent {

}
