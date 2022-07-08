import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import logo from './sprout.png';

@customElement('ui-logo')
export class Logo extends LitElement {
  static styles = css`
    .ui-logo {
      font-size: 24px !important;
      text-decoration: none;
      color: #333;

      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 0.25em;
      padding: 0 15px;
      font-size: .875rem;
    }
  `;

  @property()
  href: string;

  render() {
    return html`<a class="ui-logo" href="${this.href}">
        <img src="${logo}">
        <span>smartgarden</span>
    </a>`;
  }
}