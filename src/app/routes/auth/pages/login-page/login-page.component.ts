import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  effect,
  inject,
  untracked,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { ILoginData, ILoginForm } from '@models/auth.interface';
import { AuthFormComponent } from '@routes/auth/components/auth-form/auth-form.component';
import { FormValidators } from '@helpers/form-validators';
import { ControlErrorsDirective } from 'app/core/directives/control-error.directive';
import { FormSubmitDirective } from 'app/core/directives/form-submit.directive';
import { RouterLink } from '@angular/router';
import { AUTH_FORM_ERRORS, IAuthError } from '@models/error.interface';
import { AuthService } from '@coreServices/common/auth.service';
import { NgClass } from '@angular/common';
import { AuthFormErrorComponent } from '@routes/auth/components/auth-form-error/auth-form-error.component';
import { AuthFormContainerComponent } from '@routes/auth/components/auth-form-container/auth-form-container.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthFormContainerComponent,
    ButtonComponent,
    AuthFormComponent,
    AuthFormErrorComponent,
    ReactiveFormsModule,
    ControlErrorsDirective,
    FormSubmitDirective,
    RouterLink,
    NgClass,
  ],
  providers: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnDestroy {
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _authService = inject(AuthService);
  readonly $isLoading = this._authService.getIsLoading();

  form!: FormGroup<ILoginForm>;
  formError?: IAuthError;

  constructor() {
    this.initForm();

    effect(() => {
      this.$isLoading()
        ? untracked(() => {
            this.form.disable();
          })
        : untracked(() => {
            this.form.enable({ emitEvent: false });
          });
    });
  }

  ngOnDestroy(): void {
    this._authService.stopIsLoading();
  }

  initForm(): void {
    this.form = this._fb.group<ILoginForm>({
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

  signIn() {
    if (this.form.valid) {
      const loginData: ILoginData = this.form.getRawValue();
      this._authService.signIn(loginData).subscribe({
        next: (userData) => {
          this._authService.authenticateUser(userData);
        },
        error: (err: IAuthError) => {
          this.formError = err;
        },
      });
    }
  }
}
