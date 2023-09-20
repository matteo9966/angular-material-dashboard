import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageCardComponent } from '../../components/background-image-card/background-image-card.component';
import { BackgroundImageCardHeaderComponent } from '../../components/background-image-card-header/background-image-card-header.component';
import { LineChartComponent } from 'src/app/components/line-chart/line-chart.component';
import { ThemeService } from 'src/app/services/theme.service';
import { yourCaloriesData } from './calories.mock';
import { LabelCardComponent } from 'src/app/components/label-card/label-card.component';
import { FitnessService } from 'src/app/services/fitness.service';
import { map, startWith } from 'rxjs';
import { FitnessFormComponent } from 'src/app/components/fitness-form/fitness-form.component';

@Component({
  selector: 'app-fitness',
  standalone: true,
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BackgroundImageCardComponent,
    BackgroundImageCardHeaderComponent,
    LineChartComponent,
    LabelCardComponent,
    FitnessFormComponent
  ],
  providers: [FitnessService],
})
export class FitnessComponent implements OnInit {
  themeService = inject(ThemeService);
  // caloriesData = yourCaloriesData;
  fitnessService = inject(FitnessService);

  ngOnInit(): void {
    this.fitnessService.setData(yourCaloriesData); // suppose it comes from an http call
  }

  constructor() {}

  get isDark$() {
    return this.themeService.isDark$;
  }

  get avg$() {
    return this.fitnessService.avg$;
  }

  get avgLabel$() {
    return this.fitnessService.avg$.pipe(
      startWith(''),
      map((avg) => {
        return !Number.isNaN(avg)
          ? `${(+avg).toFixed(2)} Calories`
          : 'Data not available';
      })
    );
  }

  get caloriesData$() {
    return this.fitnessService.data$;
  }

  get lastCaloriesData$() {
    return this.caloriesData$.pipe(map((data) => data[data.length - 1] || 0));
  }
}
