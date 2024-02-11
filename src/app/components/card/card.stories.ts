import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, moduleMetadata } from '@storybook/angular';
import { InfoRowComponent } from '../info-row/info-row.component';
import { CardComponent } from './card.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tip Calculator/ Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent, InfoRowComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
};

export const DisplayValue: Story = () => ({
  template: `<app-card><app-info-row  [label]="'Tip Amount'"
          [labelSuffix]="'/ Person'"
          [valueUnit]="'$'"
          [value]="25"></app-info-row><app-info-row  [label]="'Total Amount'"
          [labelSuffix]="'/ Person'"
          [valueUnit]="'$'"
          [value]="525"></app-info-row>
          <button style="line-height: 36px;
          letter-spacing: 0.1em;
          align-items: center;
          background: #2cc0ae;
          width: 100%;
          padding: 15px 0px;
          border-radius: 7px;
          border: none;margin-top:200px;font-size:24px;color: #00474b" (click)=onReset()  class="reset-btn">RESET</button>
          </app-card>
          `,
  props: {
    onReset: () => console.log('reset values'),
  },
});
