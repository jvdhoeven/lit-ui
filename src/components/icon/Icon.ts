import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { icons } from './svgs/icons'

@customElement('ui-icon')
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    :host([shape="square"]), :host([shape="circle"]) {
      width: 36px;
      height: 36px;
    }

    .ui-icon {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .ui-icon img {
      width: 24px;
      height: 24px;
    }

    .ui-icon--variant-warning {
      background-color: red;
    }

    .ui-icon--variant-primary {
      background-color: #1e87f0;
    }

    .ui-icon--variant-dark {
      background-color: #484848;
    }

    .ui-icon--variant-warning img, .ui-icon--variant-primary img {
        filter:  brightness(0) invert(1);
    }

    .ui-icon--variant-dark img {
      filter: invert(72%) sepia(1%) saturate(1968%) hue-rotate(354deg) brightness(92%) contrast(88%);
    }

    .ui-icon--shape-square {
      border-radius: 5px;
      padding: 6px;
    }

    .ui-icon--shape-circle {
      border-radius: 18px;
      padding: 6px;
    }
  `;

  @property()
  icon: 'watering-can' | 'flower-tulip' | 'sun-thermometer';

  @property()
  variant: string = '';

  @property()
  shape: "default" | "circle" | "square" = "default";

  render() {
    return html`<span class="ui-icon ui-icon--variant-${this.variant} ui-icon--shape-${this.shape}">
      <img src="${icons[this.icon]}" />
    </span>`;
  }
}