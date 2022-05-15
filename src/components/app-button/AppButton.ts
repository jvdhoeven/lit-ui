import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-app-button')
export class AppButton extends LitElement {
  static styles = css`
    
  `;

  render() {
    return html`<div class="ui-app-button"><slot></slot></div>`;
  }
}