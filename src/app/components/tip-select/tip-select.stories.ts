import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { TipSelectComponent } from './tip-select.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { AppComponent } from 'src/app/app.component';

export default {
  title: 'Tip Calculator/ Tip select',
  component: TipSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TipSelectComponent,
        ButtonComponent,
        InputFieldComponent,
        AppComponent,
      ],
      imports: [CommonModule, FormsModule],
    }),
  ],
};

export const DisplayValue1: Story = () => ({
  template: `<app-tip-select
      [tipValue]="tipValue"
      [label]="'Select Tip %'"
      (onTipChange)="handleTip($event)"
    ></app-tip-select>`,
  props: {
    handleTip: (event: any) => console.log(event),
    tipValue: 5,
  },
});
export const DisplayValue2: Story = () => ({
  template: `<app-tip-select
      [tipValue]="tipValue"
      [label]="'Select Tip %'"
      (onTipChange)="handleTip($event)"
    ></app-tip-select>`,
  props: {
    handleTip: (event: any) => console.log(event),
    tipValue: 20,
  },
});
export const DisplayValue3: Story = () => ({
  template: `<app-tip-select
      [tipValue]="tipValue"
      [label]="'Select Tip %'"
      (onTipChange)="handleTip($event)"
    ></app-tip-select>`,
  props: {
    handleTip: (event: any) => console.log(event),
    tipValue: 50,
  },
});
