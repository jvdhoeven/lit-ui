import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { Button } from '../button/Button';

@customElement('ui-link-button')
export class LinkButton extends Button {
  @property()
  href: string;

  constructor() {
    super();
  }

  render() {
    return html`<a class="ui-button ui-button--variant-${this.variant}" href="${this.href}"><slot></slot></a>`;
  }
}