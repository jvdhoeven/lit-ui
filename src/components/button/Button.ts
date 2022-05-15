import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-button')
export class Button extends LitElement {
  static styles = css`
    
  `;

  render() {
    return html`<div class="ui-button"><slot></slot></div>`;
  }
}