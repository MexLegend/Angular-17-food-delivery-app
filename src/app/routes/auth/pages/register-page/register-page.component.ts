import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { FormValidators } from '@helpers/form-validators';
import { IRegisterForm } from '@models/auth.interface';
import { AuthFormHeaderComponent } from '@routes/auth/components/auth-form-header/auth-form-header.component';
import { AuthFormComponent } from '@routes/auth/components/auth-form/auth-form.component';
import { SocialAuthActionsComponent } from '@routes/auth/components/social-auth-actions/social-auth-actions.component';
import { ControlErrorsDirective } from 'app/core/directives/control-error.directive';
import { FormSubmitDirective } from 'app/core/directives/form-submit.directive';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    AuthFormHeaderComponent,
    ButtonComponent,
    SocialAuthActionsComponent,
    AuthFormComponent,
    ReactiveFormsModule,
    ControlErrorsDirective,
    FormSubmitDirective,
    RouterLink,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  private readonly _fb = inject(NonNullableFormBuilder);

  formGroup!: FormGroup<IRegisterForm>;

  constructor() {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this._fb.group<IRegisterForm>({
      name: this._fb.control('', {
        validators: [FormValidators.required('Enter the name')],
      }),
      phone: this._fb.control(''),
      email: this._fb.control('', {
        validators: [
          FormValidators.required('Enter the email'),
          FormValidators.email(),
        ],
      }),
      password: this._fb.control('', {
        validators: [FormValidators.required('Enter the password')],
      }),
      repeatPassword: this._fb.control('', {
        validators: [
          FormValidators.required('Enter the password'),
          FormValidators.passwordMismatch(),
        ],
      }),
    });
  }

  register() {
    const errors = this.formGroup.controls.email.errors;

    errors
      ? console.log({ errors })
      : console.log(this.formGroup.getRawValue());
  }
}
