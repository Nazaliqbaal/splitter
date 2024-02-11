import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { InputFieldComponent } from './input-field.component';
import { FormsModule } from '@angular/forms';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tip Calculator/Inputfield',
  component: InputFieldComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule],
    }),
  ],
};

export const PeopleInput: Story = () => ({
  props: {
    value: 0,
    label: 'Number of People',
    icon: 'assets/people-icon.png',
    toValidate:true
  },
});

export const BillInput: Story = () => ({
  props: {
    value:0,
    label: 'Bill',
    icon: 'assets/dollar.png',
    toValidate:true,
    
  },
});
