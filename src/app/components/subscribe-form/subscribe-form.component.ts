import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscribeFormComponent {

}
