import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { ILoginForm } from '@models/auth.interface';
import { AuthFormComponent } from '@routes/auth/components/auth-form/auth-form.component';
import { SocialAuthActionsComponent } from '@routes/auth/components/social-auth-actions/social-auth-actions.component';
import { FormValidators } from '@helpers/form-validators';
import { ControlErrorsDirective } from 'app/core/directives/control-error.directive';
import { FormSubmitDirective } from 'app/core/directives/form-submit.directive';
import { AuthFormHeaderComponent } from '@routes/auth/components/auth-form-header/auth-form-header.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthFormHeaderComponent,
    ButtonComponent,
    SocialAuthActionsComponent,
    AuthFormComponent,
    ReactiveFormsModule,
    ControlErrorsDirective,
    FormSubmitDirective,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly _fb = inject(NonNullableFormBuilder);

  formGroup!: FormGroup<ILoginForm>;

  constructor() {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this._fb.group<ILoginForm>({
      email: this._fb.control('', {
        validators: [
          FormValidators.required('Enter the email'),
          FormValidators.email('Enter a valid email'),
        ],
      }),
      password: this._fb.control('', {
        validators: [FormValidators.required('Enter the password')],
      }),
    });
  }

  login() {
    const errors = this.formGroup.controls.email.errors;

    errors
      ? console.log({ errors })
      : console.log(this.formGroup.getRawValue());
  }
}
