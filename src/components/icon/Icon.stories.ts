import { html } from 'lit';

import './Icon';

export default {
  title: 'Components/Icon',
};

export const Default = () => html`<ui-icon icon="flower-tulip"></ui-icon><ui-icon icon="watering-can" color="white"></ui-icon><ui-icon icon="sun-thermometer"></ui-icon>`;
export const Square = () => html`<ui-icon icon="flower-tulip" shape="square" variant="warning"></ui-icon><ui-icon icon="watering-can" shape="square" variant="warning"></ui-icon><ui-icon icon="sun-thermometer" shape="square" variant="warning"></ui-icon>`;
export const Circle = () => html`<ui-icon icon="flower-tulip" shape="circle" variant="dark"></ui-icon><ui-icon icon="watering-can" shape="circle" variant="primary"></ui-icon><ui-icon icon="sun-thermometer" shape="circle" variant="primary"></ui-icon>`;