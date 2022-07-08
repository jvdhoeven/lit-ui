import { html } from 'lit';

import './MediaCard';
import teaser from './teaser1.jpg';

export default {
  title: 'Components/Cards/MediaCard',
};

export const Primary = () => html`<ui-media-card nopadding>
  <img slot="media" src="${teaser}" style="object-fit: cover;
  height: 100%; width: 100%" />
  <div slot="body">Body</div>
</ui-media-card><ui-media-card nopadding position="right">
<img slot="media" src="${teaser}" style="object-fit: cover;
height: 100%; width: 100%" />
<div slot="body">Body</div>
</ui-media-card>`;