import { html } from 'lit';

import './Card';

export default {
  title: 'Components/Cards/Card',
};

export const Primary = () => html`<ui-card>
  <div slot="body">Body</div>
</ui-card>`;

export const Secondary = () => html`<ui-card nopadding>
  <div slot="body">Body</div>
</ui-card>`;