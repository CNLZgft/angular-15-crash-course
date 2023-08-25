import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  headerTitle: string = 'HEADER Title w/Input';
  isVisible: boolean = true;

  name: string | undefined;
  lastName: string | undefined;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router) {}

  observable$: Observable<number> = of(1, 2, 3, 4, 5);

  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  formGroup: UntypedFormGroup | undefined;

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

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }
}
