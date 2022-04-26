import { html } from 'lit';

import '../components/heading/Heading';
import '../components/container/Container';
import '../components/section/Section';
import '../components/grid/Grid';

export default {
  title: 'Docs/Page',
};

export const Primary = () => html`<div>
  <ui-section>
    <ui-container>
      <ui-heading>Warum eine smartgarden App?</ui-heading>
      <ui-grid container>
        <ui-grid item xs="12" sm="6" md="4">
          <ui-heading variant="h2">Bewässerungsplan</ui-heading>
        </ui-grid>
        <ui-grid item xs="12" sm="6" md="4">
          <ui-heading variant="h2">Temperaturmessung</ui-heading>
        </ui-grid>
        <ui-grid item xs="12" sm="6" md="4">
          <ui-heading variant="h2">Bodenfeuchtigkeit</ui-heading>
        </ui-grid>
      </ui-grid>
    <ui-container>
  </ui-section>
  <ui-section primary>
    <ui-container>
      <ui-heading>Die Funktionen</ui-heading>
      Foo
    <ui-container>
  </ui-section>
  <ui-section>
    <ui-container>
      <ui-heading>Das sagen unsere Nutzer</ui-heading>
      Foo
    <ui-container>
  </ui-section>
</div>`;