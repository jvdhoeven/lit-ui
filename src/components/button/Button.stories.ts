import { html } from 'lit';

import './Button';

export default {
  title: 'Components/Buttons/Button',
};

export const Primary = () => html`<div>
  <div style="margin-bottom: 20px"><ui-button>Button Primary</ui-button></div>
  <div><ui-button variant="secondary">Button Secondary</ui-button></div>
</div>`;