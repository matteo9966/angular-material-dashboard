import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
MatExpansionModule
@Component({
  selector: 'app-faq-questions',
  standalone: true,
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './faq-questions.component.html',
  styleUrls: ['./faq-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqQuestionsComponent {
  panelOpenState=false;
}
