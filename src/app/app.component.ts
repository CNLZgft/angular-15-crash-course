import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-15-crash-course';
  headerTitle: string = 'HEADER Title w/Input';
  isVisible: boolean = true;

  name: string | undefined;
  lastName: string | undefined;

  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup | undefined;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      //properties to add in the formControlName HTML
      name: [undefined, Validators.required],
      lastName: undefined,
    });
  }

  onSubmit(): void {
    //console.log(this.name);
    //console.log(this.lastName);
    console.log('Valid?: ', this.formGroup?.valid);

    console.log(this.formGroup?.value);
  }
}
