import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-15-crash-course';
  headerTitle: string = 'HEADER Title w/Input';
  isVisible: boolean = true;

  name: string | undefined;
  lastName: string | undefined;

  constructor(private formBuilder: FormBuilder) {}

  observable$: Observable<number> = of(1, 2, 3, 4, 5);

  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  formGroup: FormGroup | undefined;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      //properties to add in the formControlName HTML
      name: [undefined, Validators.required],
      lastName: undefined,
    });

    this.displayObservableNumbers();
    this.observeFormChanges();
  }

  private displayObservableNumbers() {
    this.subscription = this.observable$.subscribe((value) => {
      console.log(value);
    });
  }

  private observeFormChanges() {
    this.formSubscription = this.formGroup?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit(): void {
    //console.log(this.name);
    //console.log(this.lastName);
    console.log('Valid?: ', this.formGroup?.valid);

    console.log(this.formGroup?.value);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }
}
