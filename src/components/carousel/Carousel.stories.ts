import { html } from 'lit';
import user1 from "./user1.jpg";

import './Carousel';

export default {
  title: 'Components/Carousel',
};

export const Primary = () => html`<ui-container><ui-carousel>
<ui-carousel-item>
  <div class="ui-padding-1 ui-margin-1">
    <div>
      <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
      <span style="vertical-align: middle">Clara</span>
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
      <span style="vertical-align: middle">Wanda</span>
    </div>
    <p class="uk-margin-1" style="font-size: 14px;">
    "Die App macht richtig spaß und mein Gemüse freut sich."
    </p>
  </div>
</ui-carousel-item>
<ui-carousel-item>
<div class="ui-padding-1 ui-margin-1">
    <div>
      <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
      <span style="vertical-align: middle">Thorsten</span>
    </div>
    <p class="uk-margin-1" style="font-size: 14px;">
    "Besser gehts nicht. Ich habe mir gleich noch 3 weitere
    smartgarden devices bestellt."
    </p>
  </div>
</ui-carousel-item>
<ui-carousel-item>
<div class="ui-padding-1 ui-margin-1">
    <div>
      <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
      <span style="vertical-align: middle">Frank</span>
    </div>
    <p class="uk-margin-1" style="font-size: 14px;">
    "So tolle Tomaten wie in diesem Jahr hatte ich noch nie!
    Das alles Dank der smartgarden app."
    </p>
  </div>
</ui-carousel-item>
<ui-carousel-item>
<div class="ui-padding-1 ui-margin-1">
    <div>
      <img src="${user1}" width="50" height="50" style="vertical-align: middle; border-radius: 5px;">
      <span style="vertical-align: middle">Rüdiger</span>
    </div>
    <p class="uk-margin-1" style="font-size: 14px;">
    "So tolle Tomaten wie in diesem Jahr hatte ich noch nie!
    Das alles Dank der smartgarden app."
    </p>
  </div>
</ui-carousel-item>
</ul-carousel></ui-container>`;