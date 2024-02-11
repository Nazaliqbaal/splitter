import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { InfoRowComponent } from './info-row.component';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Tip Calculator/ Info Row',
    component: InfoRowComponent,
};

export const TipAmtPerPerson: Story = () => ({
    props: {
        label: 'Tip Amount',
        labelSuffix: '/ Person',
        valueUnit: '$',
        value: '25.00',
    },
})
export const TotalAmtPerPerson: Story = () => ({
    props: {
        label: 'Total Amount',
        labelSuffix: '/ Person',
        valueUnit: '$',
        value: '525.00',
    },
})