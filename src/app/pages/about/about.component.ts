import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqQuestionsComponent } from 'src/app/components/faq-questions/faq-questions.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FaqQuestionsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
