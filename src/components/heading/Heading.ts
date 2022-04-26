import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-heading')
export class Heading extends LitElement {
  static styles = css`
    .heading.heading--h1 {
      color: red;
      font-size: 24px;
      font-weight: bold;
    }

    .heading.heading--h2 {
      color: red;
      font-size: 20px;
      font-weight: bold;
    }

    .heading.heading--h3 {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }

    .heading.heading--h4 {
      color: red;
      font-size: 12px;
      font-weight: bold;
    }
  `;

  @property()
  variant: string = "h1";

  @property()
  component: string = "div";

  render() {
    let output = html`<div class="heading heading--${this.variant}"><slot></slot></div>`;
    if(this.component === 'h1') {
      output = html`<h1 class="heading heading--${this.variant}"><slot></slot></h1>`;
    } else if(this.component === 'h2') {
      output = html`<h2 class="heading heading--${this.variant}"><slot></slot></h2>`;
    } else if(this.component === 'h3') {
      output = html`<h3 class="heading heading--${this.variant}"><slot></slot></h3>`;
    } else if(this.component === 'h4') {
      output = html`<h4 class="heading heading--${this.variant}"><slot></slot></h4>`;
    }
    return output;
  }
}