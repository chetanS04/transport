import { CommonModule } from '@angular/common';
import { Component, input, output, OnInit, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../../../../../shared/models/interface';
import { StateCitiesService } from '../../../../../core/services/state-cities.service';
import { ActivatedRoute } from '@angular/router';
import { ValidateAllFormFields } from '../../../../../core/utils/CustomValidator';
import { ToggleSwitchComponent } from '../../../../../shared/components/toggle-switch/toggle-switch.component';

@Component({
  selector: 'app-cities-form-component',
  imports: [CommonModule, ReactiveFormsModule, ToggleSwitchComponent],
  templateUrl: './cities-form-component.html',
  standalone: true,
})
export class CitiesFormComponent implements OnInit {
  rForm: FormGroup;
  state_id!: number;
  data = input<City | null>(null);
  panelClosed = output<boolean>();

  constructor(
    private fb: FormBuilder,
    private citiesService: StateCitiesService,
    private route: ActivatedRoute
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
      pincode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
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
    this.state_id = Number(this.route.snapshot.paramMap.get('state_id'));
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
        this.citiesService.updateCity(currentData.id, formData).subscribe({
          next: () => {
            this.closeModal(true);
          },
          error: (err) => console.log(err),
        });
      } else {
        // Create new option
        this.citiesService.createCity(this.state_id, formData).subscribe({
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
