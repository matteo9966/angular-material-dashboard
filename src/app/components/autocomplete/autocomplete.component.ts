import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Observable,
  catchError,
  filter,
  map,
  of,
  startWith,
  switchMap,
  tap,
  Subject,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent {
  private inputValue$ = new Subject<string>();

  @Input() searchSource!: (text: string) => Observable<string[]>;
  @Input() valueSubject$!: Subject<string>; // pass a subject to this autocomplete and recieve the next value
  @ViewChild('nativeInput') input!: ElementRef;
  searchInput = new FormControl('', [], []);
  options: Observable<string[]>;
  constructor() {
    this.searchInput.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        if (this.valueSubject$ && data) this.valueSubject$.next(data);
      });
    this.options = this.inputValue$.asObservable().pipe(
      distinctUntilChanged(),
      debounceTime(200),
      filter(Boolean),
      switchMap((value) => {
        return this.searchSource(value).pipe(catchError((e) => of([])));
      })
    );
  }


  inputChanges() {
    const element = <HTMLInputElement>this.input.nativeElement;
    const value = element.value;
    this.inputValue$.next(value);
  }
}
