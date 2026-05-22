// Angular
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Core
import { AddressSuggestion } from '../../../../core/services/address/address.service';

@Component({
  selector: 'app-event-address',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.scss'],
})

export class EventAddressComponent implements OnInit {
  @Input({ required: true }) form!: FormGroup;
  @Input() suggestions: AddressSuggestion[] = [];

  @Output() inputChange = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<AddressSuggestion>();

  addressInput = new FormControl('');

  get addressGroup(): FormGroup {
    return this.form.get('address') as FormGroup;
  }

  get displayValue(): string {
    const a = this.addressGroup.value;

    return a?.street
      ? `${a.street}, ${a.postalCode} ${a.city}`
      : '';
  }

  get addressLabelControl(): FormControl {
    return this.form.get('addressLabel') as FormControl;
  }

  ngOnInit() {
    const a = this.addressGroup?.value;

    if (a?.street) {
      this.addressInput.setValue(
        `${a.street}, ${a.postalCode} ${a.city}`,
        { emitEvent: false }
      );
    }
  }

  onInput() {
    const value = this.addressLabelControl.value ?? '';

    if (value.length < 3) {
      return;
    }

    this.addressGroup.reset();

    this.addressLabelControl.setErrors({
      required: true
    });

    this.inputChange.emit(value);
  }

  onSelect(address: AddressSuggestion) {

    this.addressGroup.patchValue({
      street: address.street,
      city: address.city,
      postalCode: address.postalCode,
    });

    this.addressLabelControl.setValue(
      this.displayValue,
      { emitEvent: false }
    );

    this.addressLabelControl.setErrors(null);
    this.addressLabelControl.markAsTouched();

    this.optionSelected.emit(address);
  }
}