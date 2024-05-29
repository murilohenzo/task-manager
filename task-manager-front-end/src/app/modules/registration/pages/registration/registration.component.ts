import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      blocked: [false],
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)]
      ],
      senha: [
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

  registerDataForm(): any {
    // this.newUserStore.setFormValue(this.registrationForm.value);
    console.log(this.registrationForm.value);
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

  get nome() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get senha() {
    return this.registrationForm.get('password');
  }
}
