import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FitnessService } from 'src/app/services/fitness.service';
import { LineChartData } from 'src/app/models/chartData.interface';
@Component({
  selector: 'app-fitness-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './fitness-form.component.html',
  styleUrls: ['./fitness-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FitnessFormComponent implements OnInit {
  fitnessService = inject(FitnessService);
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    date: this.formBuilder.control<Date>(new Date()),
    value: this.formBuilder.control(0),
  });

  ngOnInit() {
    this.fitnessService.data$.subscribe(d=>console.log(d));
    this.form.valueChanges.subscribe((v) => console.log(v));
  }

  onSubmit() {
    console.log('submitted')
    const date = this.form.controls.date;
    if (this.form.valid) {
      this.fitnessService.patchData((data) => {
        const regionEs = new Intl.DateTimeFormat('it', { timeZone: 'UTC' });

        const stringEs = regionEs.format(this.form.controls.date.value!);

        if (!data) {
          let list: LineChartData = [];
          list.push({
            data: +this.form.controls.value.value!,
            label: stringEs,
          });
          return list;
        }
       
        data.push({ data: +this.form.controls.value.value!, label: stringEs });
        return data;
      });
    }else{
      alert('form not valid')
    }
  }
}
