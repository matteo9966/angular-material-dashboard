import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';
import {
  NgChartsModule,
  ThemeService as NgChartsThemeService,
} from 'ng2-charts';
import { ThemeService } from 'src/app/services/theme.service';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LineChartData } from 'src/app/models/chartData.interface';
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule, MatCardModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() isDark$!: Observable<boolean>;
  @Input() data: LineChartData | null = [];
  @Input() title: string = '';
  @Input() avg: number | null = null;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['avg']) {
      const previous = simpleChanges['avg'].previousValue;
      const current = simpleChanges['avg'].currentValue;
      if (previous != current) {
        this.avg = current;
      }
    }

    if (simpleChanges['data']) {
      const previous = simpleChanges['data'].previousValue;
      const current = simpleChanges['data'].currentValue;
      if (previous != current) {
        this.data = current;
        this.updateDatasets(this.data || [], this.avg);
      }
    }
  }

  ngOnInit(): void {
    if (!this.data) {
      return;
    }

    this.updateDatasets(this.data, this.avg);

    // const avg = this.avg;
    // const avgDataset: ChartConfiguration<'line'>['data']['datasets'][0] = {
    //   data: this.data.map(() => avg),
    //   label: 'Average',
    //   capBezierPoints: false,
    // };

    // const datasets: ChartConfiguration<'line'>['data']['datasets'] = [
    //   {
    //     data: this.data.map((d) => d.data),
    //     label: this.title,
    //     capBezierPoints: false,
    //   },
    // ];

    // if (avg) {
    //   datasets.push(avgDataset);
    // }

    // this.lineChartData = {
    //   labels: this.data.map((d) => d.label),
    //   datasets,
    // };
  }

  themeService = inject(NgChartsThemeService);
  darkModeService = inject(ThemeService);

  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptionsLight: ChartOptions<'line'> = {
    responsive: true,
    color: 'blue',
    elements: {
      line: {
        tension: 0.1,
      },
    },
    layout: {},
    scales: {
      x: {
        ticks: {
          color: 'blue',
        },
      },
    },
  };

  public lineChartOptionsDark: ChartOptions<'line'> = {
    responsive: true,
    elements: {},
    layout: {},
    color: 'white',
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  public lineChartLegend = true;

  constructor() {
    this.darkModeService.isDark$
      .pipe(takeUntilDestroyed())
      .subscribe((isDark) => {
        if (isDark) {
          this.changeTheme(this.lineChartOptionsDark);
        } else {
          this.changeTheme(this.lineChartOptionsLight);
        }
      });
  }

  changeTheme(theme: ChartOptions<'line'>) {
    this.themeService.setColorschemesOptions(theme);
  }

  get colorSchematicOptions() {
    return this.themeService.colorschemesOptions;
  }

  get isDarkMode$() {
    return this.darkModeService.isDark$;
  }

  private updateDatasets(data: LineChartData, avg: number | null) {
    const avgDataset: ChartConfiguration<'line'>['data']['datasets'][0] = {
      data: data.map(() => avg),
      label: 'Average',
      capBezierPoints: false,
    };

    const datasets: ChartConfiguration<'line'>['data']['datasets'] = [
      {
        data: data.map((d) => d.data),
        label: this.title,
        capBezierPoints: false,
      },
    ];

    if (avg) {
      datasets.push(avgDataset);
    }

    this.lineChartData = {
      labels: data.map((d) => d.label),
      datasets,
    };
  }
}
