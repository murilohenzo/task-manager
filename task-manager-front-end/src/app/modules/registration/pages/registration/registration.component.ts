import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { UserStoreService } from 'src/app/core/services/user-store/user-store.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;

  today = new Date();
  majority = new Date(
    this.today.getFullYear() - 18,
    this.today.getMonth(),
    this.today.getDate()
  );
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  registerDataForm(): any {
    this.userStore.setFormValue(this.registrationForm.value);
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100)
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          this.validatePassword
        ]
      ]
    });
  }

  private validatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const regex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$'
    );

    if (!password) {
      return null;
    }

    if (!regex.test(password)) {
      return { passwordInvalid: true };
    }

    return null;
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }
}
