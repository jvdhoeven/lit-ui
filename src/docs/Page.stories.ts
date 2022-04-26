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
          <p>
            Individualisierbare Bewässerungsplände für alle deine Bedürfnisse.
          </p>
        </ui-grid>
        <ui-grid item xs="12" sm="6" md="4">
          <ui-heading variant="h2">Temperaturmessung</ui-heading>
          <p>
            Mit den Temperatursensoren am smartgarden device weißt du immer, welche Temperatur in deinem Beet herscht.
          </p>
        </ui-grid>
        <ui-grid item xs="12" sm="6" md="4">
          <ui-heading variant="h2">Bodenfeuchtigkeit</ui-heading>
          <p>
            Perfekte Bedingungen für deine Pflanzen erreichst du durch eine optimale Bodenfeuchte.
          </p>
        </ui-grid>
      </ui-grid>
    <ui-container>
  </ui-section>
  <ui-section primary>
    <ui-container>
      <ui-heading>Die Funktionen</ui-heading>

      <ui-grid container>
        <ui-grid item sm="6">
          Bild
        </ui-grid>
        <ui-grid item sm="6">
          <ui-heading variant="h3">Übersicht</ui-heading>
          <ul>
                <li>Erstellung von Bewässerungsplänen</li>
                <li>Dashboard</li>
                <li>Echtzeit-Informationen</li>
              </ul>
        </ui-grid>
      </ui-grid>

      <ui-grid container>
        <ui-grid item sm="6">
          <ui-heading variant="h3">Smardgarden Device</ui-heading>
          <p>
            Das Smartgarden Device macht dein Hoochbeet smart und lässt sich über die smartgarden app bedienen.
          </p>
        </ui-grid>
        <ui-grid item sm="6">
          Bild
        </ui-grid>
      </ui-grid>
    <ui-container>
  </ui-section>
  <ui-section>
    <ui-container>
      <ui-heading>Das sagen unsere Nutzer</ui-heading>
      Foo
    <ui-container>
  </ui-section>
</div>`;