import { Injectable, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { BehaviorSubject, Subject, map } from 'rxjs';
@Injectable()
export class SignupFormService {
  formBuilder = inject(FormBuilder);
  form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;
  constructor() {
    this.form = this.createFormGroup();
    this.confirmPasswordControl?.addValidators(
      confirmPasswordValidator(this.passwordControl)
    );
  }

  

  get formErrors$() {
    return this.form.valueChanges.pipe(map(() => this.form.errors));
  }

  private createFormGroup() {
    return this.formBuilder.group({
      email: this.formBuilder.control('', {
        validators: [Validators.email, Validators.required],
      }),
      password: this.formBuilder.control('', {
        validators: [Validators.minLength(6), Validators.required],
      }),
      confirmPassword: this.formBuilder.control('', {
        validators: [Validators.minLength(6), Validators.required],
      }),
    });
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  get confirmPasswordControl() {
    return this.form.get('confirmPassword') as FormControl;
  }

  resetForm() {
    Object.values(this.form.controls).forEach((c) => {
      c.reset('');
      c.setErrors(null)
    });
    
   
  }

  isInvalid() {
    return this.form.invalid;
  }

  handleSubmit() {
    Object.values(this.form.controls).forEach((c) => {
      c.updateValueAndValidity();
      });
      if(!this.form.valid){
        alert('form not valid')
      }
      const data = this.form.value
      console.log(data);
    //get the form validity
    // /
  }
}

export function confirmPasswordValidator(
  passwordcontrol: FormControl | null
): ValidatorFn {
  return (control: AbstractControl) => {
    if (!passwordcontrol) return null;
    const passwordControlValue = passwordcontrol.value;
    if (passwordControlValue === control.value) {
      return null;
    }
    return {
      confirmPassword: true,
    };
  };


}
