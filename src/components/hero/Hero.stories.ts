import { html } from 'lit';

import './Hero';

export default {
  title: 'Components/Hero',
};

export const Primary = () => html`<ui-hero>
  <ui-heading slot="heading">Foooooooo</ui-heading>
  <p slot="text">Foooooooo text</p>
  <p slot="actions">Foooooooo actions</p>
</ui-hero>`;