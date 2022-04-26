import { html } from 'lit';

import '../components/heading/Heading';

export default {
  title: 'Docs/Headings',
};

export const Primary = () => html`<div>
<ui-heading variant="h1" component="h1">Heading 1</ui-heading>
<ui-heading variant="h2" component="div">Heading 2</ui-heading>
<ui-heading variant="h3" component="h3">Heading 3</ui-heading>
<ui-heading variant="h4" component="h4">Heading 4</ui-heading>
</div>`;