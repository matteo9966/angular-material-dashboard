import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWrapperComponent } from 'src/app/components/form-wrapper/form-wrapper.component';
import { TitleCardComponent } from 'src/app/components/title-card/title-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SignupFormService } from './SignupForm.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, switchMap, map, catchError,of, EMPTY, tap, concatMap, filter } from 'rxjs';
import { SignupDataService } from './SignupData.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormWrapperComponent,
    TitleCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: [
    '../../../styles/login-signup-pages.scss',
    './signup.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignupFormService, SignupDataService],
})
export class SignupComponent implements OnInit {
  signupService = inject(SignupFormService);
  signupDataService = inject(SignupDataService);
  constructor() {
    this.countryInput$.asObservable().pipe(
      filter(Boolean),
      debounceTime(500),
      switchMap((x)=>this.signupDataService.getCountries(x))
    )
      .subscribe((value) => {
       console.log(value)
      });
  }
  form = this.signupService.form;
  passwordInvalid = this.signupService.passwordControl?.invalid;
  confirmPasswordControl = this.signupService.confirmPasswordControl;
  passwordControl = this.signupService.passwordControl;
  emailControl = this.signupService.emailControl;
  isInvalid = this.signupService.isInvalid;
  @ViewChild('submitbtn', { static: true }) submitbtn!: ElementRef;

  countryInput$ = new BehaviorSubject('');

  ngOnInit(): void {
    // this.renderer.setProperty(this.submitbtn,'disabled','true');
  }

  resetForm() {
    this.signupService.resetForm();
    // this.renderer.setProperty(this.submitbtn,'disabled','true');
  }

  submit() {
    this.signupService.handleSubmit();
  }

  countryChange(event: Event) {
    console.log(event)
    this.countryInput$.next((<HTMLInputElement>event.target).value);
  }
}
