import { html } from "lit";

import "../components/app-button/AppButton";
import "../components/hero/Hero";
import "../components/heading/Heading";
import "../components/container/Container";
import "../components/section/Section";
import "../components/grid/Grid";

import teaserOne from "./teaser1.jpg";
import teaserTwo from "./teaser2.png";
import screenshot from "./screen.png";
import heroBackground from "./hero-background.jpg";

import "../styles/styles.css";

export default {
  title: "Docs/Page",
};

export const Primary = () => html`<div>
  <ui-hero background=${heroBackground} light>
    <ui-heading slot="heading" component="h1" light
      >Mit der smartgarden App zum grünen Daumen.</ui-heading
    >
    <p slot="text" class="ui-margin-4">
      Nie wieder vertrocknete Pflanzen. Nie wieder hohe
      Wasserkostenabrechnungen. Die Lösung in einer App.
    </p>
    <div slot="actions">
      <ui-app-button os="ios"></ui-app-button>
      <ui-app-button os="android"></ui-app-button>
    </div>
    <img slot="image" src=${screenshot} />
  </ui-hero>
  <ui-section>
    <ui-container>
      <ui-heading component="h2" variant="h2" class="ui-text-center"
        >Warum eine smartgarden App?</ui-heading
      >
      <ui-grid container match>
        <ui-grid item lg="4">
          <ui-card>
            <ui-heading variant="h3" class="ui-text-center"
              >Bewässerungsplan</ui-heading
            >
            <p>
              Individualisierbare Bewässerungsplände für alle deine Bedürfnisse.
            </p>
          </ui-card>
        </ui-grid>
        <ui-grid item lg="4">
          <ui-card>
            <ui-heading variant="h3" class="ui-text-center"
              >Temperaturmessung</ui-heading
            >
            <p>
              Mit den Temperatursensoren am smartgarden device weißt du immer,
              welche Temperatur in deinem Beet herscht.
            </p>
          </ui-card>
        </ui-grid>
        <ui-grid item lg="4">
          <ui-card>
            <ui-heading variant="h3" class="ui-text-center"
              >Bodenfeuchtigkeit</ui-heading
            >
            <p>
              Perfekte Bedingungen für deine Pflanzen erreichst du durch eine
              optimale Bodenfeuchte.
            </p>
          </ui-card>
        </ui-grid>
      </ui-grid>
    </ui-container>
  </ui-section>
  <ui-section primary>
    <ui-container>
      <ui-heading component="h2" variant="h2" class="ui-text-center"
        >Die Funktionen</ui-heading
      >

      <ui-card>
        <ui-grid container>
          <ui-grid item md="6">
            <img src=${teaserOne} width="100%" />
          </ui-grid>
          <ui-grid item md="6">
            <ui-heading variant="h3">Übersicht</ui-heading>
            <ul>
              <li>Erstellung von Bewässerungsplänen</li>
              <li>Dashboard</li>
              <li>Echtzeit-Informationen</li>
            </ul>
          </ui-grid>
        </ui-grid>
      </ui-card>

      <ui-card>
        <ui-grid container>
          <ui-grid item md="6">
            <ui-heading variant="h3">Smardgarden Device</ui-heading>
            <p>
              Das Smartgarden Device macht dein Hoochbeet smart und lässt sich
              über die smartgarden app bedienen.
            </p>
          </ui-grid>
          <ui-grid item md="6">
            <img src=${teaserTwo} width="100%" />
          </ui-grid>
        </ui-grid>
      </ui-card>
    </ui-container>
  </ui-section>

  <ui-section>
    <ui-container>
      <ui-heading component="h2" variant="h2" class="ui-text-center"
        >Das sagen unsere Nutzer</ui-heading
      >
      Foo
    </ui-container>
  </ui-section>
</div>`;
