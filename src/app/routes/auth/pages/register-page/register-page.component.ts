import { NgClass } from '@angular/common';
import { Component, OnDestroy, effect, inject, untracked } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { AuthService } from '@coreServices/common/auth.service';
import { FormValidators } from '@helpers/form-validators';
import { IRegisterData, IRegisterForm } from '@models/auth.interface';
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
    NgClass
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent implements OnDestroy {
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _authService = inject(AuthService);
  readonly $isLoading = this._authService.getIsLoading();

  form!: FormGroup<IRegisterForm>;

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
    this.form = this._fb.group<IRegisterForm>({
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
    if (this.form.valid) {
      const registerData: IRegisterData = this.form.getRawValue();
      this._authService.register(registerData).subscribe((resp) => {});
    }
  }
}
