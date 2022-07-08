import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { icons } from './svgs/icons'

@customElement('ui-icon')
export class Icon extends LitElement {
  static styles = css`
    .ui-icon {
        box-sizing: border-box;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-color: red;
        margin: auto;
        padding: 13px;
        color: white;
    }

    .ui-icon--white img {
        filter:  brightness(0) invert(1);
    }
  `;

  @property()
  icon: 'watering-can' | 'flower-tulip' | 'sun-thermometer';

  @property()
  color: string = '';

  render() {
    return html`<div class="ui-icon ui-icon--${this.color}">
      <img src="${icons[this.icon]}" />
    </div>`;
  }
}