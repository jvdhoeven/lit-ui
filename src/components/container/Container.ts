import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-container')
export class Container extends LitElement {
  static styles = css`
    .ui-container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (min-width: 640px) {
        .ui-container {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media (min-width: 960px) {
        .ui-container {
            padding-left: 40px;
            padding-right: 40px;
        }
    }
  `;

  render() {
    return html`<div class="ui-container"><slot></slot></div>`;
  }
}