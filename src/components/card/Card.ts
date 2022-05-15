import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-card')
export class Card extends LitElement {
  static styles = css`
    .ui-card {
        box-shadow:         3px 3px 5px 6px #ccc;
    }
  `;

  render() {
    return html`<div class="ui-card"><slot></slot></div>`;
  }
}