import { html } from "lit";

import teaserOne from "./teaser1.jpg";
import teaserTwo from "./teaser2.png";
import screenshot from "./screen.png";
import heroBackground from "./hero-background.jpg";
import user1 from "./user1.jpg";

import "../styles/styles.css";

export default {
  title: "Docs/Page",
};

export const Primary = () => html`<div>
<ui-header>
<ui-navigation-item href="#funktionen">Funktionen</ui-navigation-item>
<ui-navigation-item href="#feedback">Feedback</ui-navigation-item>
</ui-header>
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
      <ui-heading component="h2" variant="h2" class="ui-text-center">Warum eine smartgarden App?</ui-heading>
      <ui-grid container>
        <ui-grid item lg="4" match>
          <ui-card match>
            <div slot="body">
              <div class="ui-text-center">
                <ui-icon icon="watering-can" shape="square" variant="warning"></ui-icon>
              </div>
              
              <ui-heading variant="h3" class="ui-text-center ui-margin-2">Bewässerungsplan</ui-heading>
              <p>
                Individualisierbare Bewässerungsplände für alle deine Bedürfnisse.
              </p>
            </div>
          </ui-card>
        </ui-grid>
        <ui-grid item lg="4" match>
          <ui-card match>
            <div slot="body">
              <div class="ui-text-center">
                <ui-icon icon="sun-thermometer" shape="square" variant="warning"></ui-icon>
              </div>
              <ui-heading variant="h3" class="ui-text-center ui-margin-2">Temperaturmessung</ui-heading>
              <p>
                Mit den Temperatursensoren am smartgarden device weißt du immer,
                welche Temperatur in deinem Beet herscht.
              </p>
            </div>
          </ui-card>
        </ui-grid>
        <ui-grid item lg="4" match>
          <ui-card match>
            <div slot="body">
            <div class="ui-text-center">
                <ui-icon icon="flower-tulip" shape="square" variant="warning"></ui-icon>
              </div>
              <ui-heading variant="h3" class="ui-text-center ui-margin-2"
                >Bodenfeuchtigkeit</ui-heading
              >
              <p>
                Perfekte Bedingungen für deine Pflanzen erreichst du durch eine
                optimale Bodenfeuchte.
              </p>
            </div>
          </ui-card>
        </ui-grid>
      </ui-grid>
    </ui-container>
  </ui-section>
  <ui-section variant="primary">
    <ui-container>
      <ui-heading component="h2" variant="h2" class="ui-text-center"
        >Die Funktionen</ui-heading
      >
      <ui-media-card nopadding class="ui-margin-2">
        <img slot="media" src=${teaserOne} style="object-fit: cover;
        height: 100%; width: 100%" />
        <div slot="body">
          <ui-heading variant="h3">Übersicht</ui-heading>
          <ul class="ui-margin-4">
            <li>Erstellung von Bewässerungsplänen</li>
            <li>Dashboard</li>
            <li>Echtzeit-Informationen</li>
          </ul>
          <ui-button>Mehr erfahren</ui-button>
        </div>
      </ui-media-card>

      <ui-media-card nopadding position="right" class="ui-margin-2">
        <img slot="media" src=${teaserTwo} style="object-fit: cover;
        height: 100%; width: 100%" />
        <div slot="body">
          <ui-heading variant="h3">Smardgarden Device</ui-heading>
          <p class="ui-margin-4">
            Das Smartgarden Device macht dein Hoochbeet smart und lässt sich
            über die smartgarden app bedienen.
          </p>
          <ui-button>Mehr erfahren</ui-button>
        </div>
      </ui-media-card>
    </ui-container>
  </ui-section>

  <ui-section>
    <ui-container>
      <ui-heading component="h2" variant="h2" class="ui-text-center"
        >Das sagen unsere Nutzer</ui-heading
      >
      <ui-carousel>
        <ui-carousel-item>
          <div class="ui-padding-1 ui-margin-1">
            <div>
              <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
              <span style="vertical-align: middle"> Clara</span>
            </div>
            <p class="uk-margin-1" style="font-size: 14px;">
              "Seit ich die smartgarden app habe, brauche ich mir keine
              Sorgen mehr um meine Pflanzen machen."
            </p>
          </div>
        </ui-carousel-item>
        <ui-carousel-item>
        <div class="ui-padding-1 ui-margin-1">
            <div>
              <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
              <span style="vertical-align: middle"> Clara</span>
            </div>
            <p class="uk-margin-1" style="font-size: 14px;">
              "Seit ich die smartgarden app habe, brauche ich mir keine
              Sorgen mehr um meine Pflanzen machen."
            </p>
          </div>
        </ui-carousel-item>
        <ui-carousel-item>
        <div class="ui-padding-1 ui-margin-1">
            <div>
              <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
              <span style="vertical-align: middle"> Clara</span>
            </div>
            <p class="uk-margin-1" style="font-size: 14px;">
              "Seit ich die smartgarden app habe, brauche ich mir keine
              Sorgen mehr um meine Pflanzen machen."
            </p>
          </div>
        </ui-carousel-item>
        <ui-carousel-item>
        <div class="ui-padding-1 ui-margin-1">
            <div>
              <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
              <span style="vertical-align: middle"> Clara</span>
            </div>
            <p class="uk-margin-1" style="font-size: 14px;">
              "Seit ich die smartgarden app habe, brauche ich mir keine
              Sorgen mehr um meine Pflanzen machen."
            </p>
          </div>
        </ui-carousel-item>
        <ui-carousel-item>
        <div class="ui-padding-1 ui-margin-1">
            <div>
              <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
              <span style="vertical-align: middle"> Clara</span>
            </div>
            <p class="uk-margin-1" style="font-size: 14px;">
              "Seit ich die smartgarden app habe, brauche ich mir keine
              Sorgen mehr um meine Pflanzen machen."
            </p>
          </div>
        </ui-carousel-item>
      </ul-carousel>
    </ui-container>
  </ui-section>

  <ui-section variant="dark">
    <ui-container class="ui-text-center ui-text-left@m">
      <ui-grid container>
        <ui-grid item md="3">
          <ui-icon icon="twitter" shape="circle" variant="dark"></ui-icon>
          <ui-icon icon="facebook" shape="circle" variant="dark"></ui-icon>
          <ui-icon icon="instagram" shape="circle" variant="dark"></ui-icon>
        </ui-grid>
        <ui-grid item md="3">
          <ui-heading variant="h3" light>Unternehmen</ui-heading>
          <ui-list>
            <li>Über uns</li>
            <li>Jobs</li>
            <li>Presse</li>
            <li>Impressum</li>
          </ui-list>
        </ui-grid>
        <ui-grid item md="3">
          <ui-heading variant="h3" light>Produkt</ui-heading>
          <ui-list>
            <li>Preise</li>
            <li>FAQ</li>
            <li>Liefergebiet</li>
          </ui-list>
        </ui-grid>
        <ui-grid item md="3">
          <div class="ui-text-bold">Smartgarden Company</div>
          <div>In der Straße 3</div>
          <div>50677 Köln</div>
        </ui-grid>
      </ui-grid>
    </ui-container>
  </ui-section>
</div>`;
