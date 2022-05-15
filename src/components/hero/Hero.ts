import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-hero')
export class Hero extends LitElement {
  static styles = css`
    
  `;

  render() {
    return html`<div class="ui-hero">
      <slot name="heading"></slot>
      <slot name="text"></slot>
      <slot name="actions"></slot>
    </div>`;
  }
}