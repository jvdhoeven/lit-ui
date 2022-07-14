import { html } from 'lit';

import './List';

export default {
  title: 'Components/List',
};

export const Primary = () => html`<ui-list>
    <li>foo</li>
    <li>bar</li>
</ui-list>`;