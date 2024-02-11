// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Tip Calculator/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export const InactiveButton: Story = () => ({
    props: {
    label: '5',
    active: false,
    },
});
export const ActiveButton: Story = () => ({
    props: {
    label: '10',
    active: true,
        // click: true,
        clicked: () => {
            console.log('Active button click');
        },
    },
});