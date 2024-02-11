import {
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() icon: string | null = null;
  @Input() label: string | null = null;
  @Input() validate: boolean = true;
  value?: number | null = null;
  hasError: boolean = false;
  @Input() inputPlaceholder: string = '0';
  @Input() textAlign: string = '';

  onInput(event: any) {
    const pattern = /[0-9]/;
    // Check if the input value contains any non-digit characters
    if (event.target.value.match(/^[0-9]+$/) === null) {
      // If it does, remove all non-digit characters from the input value
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
    // Convert the input value to a number and assign it to a property of the component
    this.value = +event.target.value;
    // Call a method on the component that handles the change of the input value
    this.onChange(this.value);
    if (this.validate) {
      this.validateNumber();
    }
    this.onTouched();
  }
  private validateNumber() {
    this.hasError = parseFloat(`${this.value}`) === 0;
  }

  onChange = (value: number) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }
}
