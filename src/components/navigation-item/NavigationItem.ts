import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-navigation-item')
export class NavigationItem extends LitElement {
  static styles = css`
    :host a {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 0.25em;
      padding: 0 15px;
      font-size: .875rem;
      color: #999;
      text-transform: uppercase;
      transition: .1s ease-in-out;
      transition-property: color,background-color;
      text-decoration: none;
    }
  `;

  @property()
  href: string;

  render() {
    return html`<div><a href="${this.href}"><slot></slot></a></div>`;
  }
}