import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientCardComponent } from 'src/app/components/shared/gradient-card/gradient-card.component';
import { SubscribeFormComponent } from 'src/app/components/subscribe-form/subscribe-form.component';
@Component({
  selector: 'app-home-subscribe',
  standalone: true,
  imports: [CommonModule,GradientCardComponent,SubscribeFormComponent],
  templateUrl: './home-subscribe.component.html',
  styleUrls: ['./home-subscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSubscribeComponent {

}
