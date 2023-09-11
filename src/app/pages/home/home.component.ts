import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientCardComponent } from 'src/app/components/shared/gradient-card/gradient-card.component';
import { SubscribeFormComponent } from 'src/app/components/subscribe-form/subscribe-form.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,GradientCardComponent,SubscribeFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  
}
