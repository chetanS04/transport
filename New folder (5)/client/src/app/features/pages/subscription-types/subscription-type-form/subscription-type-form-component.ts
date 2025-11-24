import { CommonModule } from '@angular/common';
import { Component, input, output, OnInit, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubscriptionTypes } from '../../../../shared/models/interface';
import { SubscriptionTypesService } from '../../../../core/services/subscription-types.service';
import { ValidateAllFormFields } from '../../../../core/utils/CustomValidator';
import { ToggleSwitchComponent } from '../../../../shared/components/toggle-switch/toggle-switch.component';

@Component({
  selector: 'app-subscription-type-form-component',
  imports: [CommonModule, ReactiveFormsModule, ToggleSwitchComponent],
  templateUrl: './subscription-type-form-component.html',
  standalone: true,
})
export class SubscriptionTypeFormComponent implements OnInit {
  rForm: FormGroup;
  data = input<SubscriptionTypes | null>(null);
  panelClosed = output<boolean>();

  constructor(
    private fb: FormBuilder,
    private subscriptionTypesService: SubscriptionTypesService
  ) {
    this.rForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
      price: ['', Validators.compose([Validators.required, Validators.min(1)])],
      duration: ['', Validators.compose([Validators.required])],
      status: [false],
    });

    // Use effect to watch for data changes
    effect(() => {
      const currentData = this.data();
      if (currentData) {
        this.rForm.patchValue(currentData);
      }
    });
  }

  ngOnInit(): void {
    if (this.data()) {
      this.rForm.patchValue(this.data()!);
    }
  }

  // close modal
  closeModal(action: boolean): void {
    this.panelClosed.emit(action);
  }

  // Submit form (create and update)
  onSubmit(): void {
    if (this.rForm.valid) {
      const formData = this.rForm.value;
      const currentData = this.data();
      if (currentData) {
        // Update existing option
        this.subscriptionTypesService
          .updateSubscriptionType(currentData.id, formData)
          .subscribe({
            next: () => {
              this.closeModal(true);
            },
            error: (err) => console.log(err),
          });
      } else {
        // Create new option
        this.subscriptionTypesService
          .createSubscriptionType(formData)
          .subscribe({
            next: () => {
              this.closeModal(true);
            },
            error: (err) => console.log(err),
          });
      }
    } else {
      ValidateAllFormFields.validateAll(this.rForm);
    }
  }
}
