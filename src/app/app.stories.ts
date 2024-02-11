import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, moduleMetadata } from '@storybook/angular';
import { AppComponent } from 'src/app/app.component';
import { InfoRowComponent } from './components/info-row/info-row.component';
import { CardComponent } from './components/card/card.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TipSelectComponent } from './components/tip-select/tip-select.component';
import { ButtonComponent } from './components/button/button.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tip Calculator/ SplitterApp',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        InfoRowComponent,
        CardComponent,
        InputFieldComponent,
        TipSelectComponent,
        ButtonComponent
      ],
      imports: [CommonModule, FormsModule],
    }),
  ],
};

export const Splitter: Story = () => ({
  props: {},
});
