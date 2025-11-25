import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorageService } from '../../../core/services/token-storage.service';
import { FlashMessageService } from '../../../core/services/flash-message.service';
import { ValidateAllFormFields } from '../../../core/utils/CustomValidator';
import { InputValidationErrorMessage } from '../../../shared/components/input-validation-error-message/input-validation-error-message-component';
import { LucideAngularModule, Mail, ShieldCheck, Loader } from 'lucide-angular';

@Component({
  selector: 'app-forgot-password-component',
  standalone: true,
  imports: [
    LucideAngularModule,
    InputValidationErrorMessage,
    ReactiveFormsModule
  ],
  templateUrl: './forgot-password-component.html',
})
export class ForgotPasswordComponent implements OnInit {
  rForm!: FormGroup;

  isLoggedIn = computed(() => this.tokenStorageService.isAuthenticated());
  isLoading = signal(false);

  readonly Mail = Mail;
  readonly ShieldCheck = ShieldCheck;
  readonly Loader = Loader;

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private flash = inject(FlashMessageService);
  private router = inject(Router);
  private tokenStorageService = inject(TokenStorageService);

  ngOnInit(): void {
    if (this.tokenStorageService.isAuthenticated()) {
      this.router.navigate(['my-dashboard']);
      return;
    }

    this.rForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.rForm.invalid) {
      ValidateAllFormFields.validateAll(this.rForm);
      return;
    }

    this.isLoading.set(true);

    this.auth.forgotPassword(this.rForm.value).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.flash.show('Password reset link sent!', 'success');
      },
      error: (err) => {
        this.isLoading.set(false);
        this.flash.show(err.error?.message || 'Something went wrong', 'error');
      }
    });
  }
}
