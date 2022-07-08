import { html } from 'lit';

import './Navigation';

export default {
  title: 'Components/Navigation',
};

export const Primary = () => html`<ui-navigation>
  <ui-navigation-item>Funktionen</ui-navigation-item>
  <ui-navigation-item>Feedback</ui-navigation-item>
</ui-navigation>`;