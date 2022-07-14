import { html } from 'lit';
import './Header';

export default {
  title: 'Components/Header',
};

export const Primary = () => html`<ui-header>
  <ui-navigation-item href="#funktionen">Funktionen</ui-navigation-item>
  <ui-navigation-item href="#feedback">Feedback</ui-navigation-item>
</ui-header>`;