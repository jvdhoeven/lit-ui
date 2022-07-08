import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-section")
export class Section extends LitElement {
  static styles = css`
    .ui-section {
      padding-top: 40px;
      padding-bottom: 40px;
      display: block;
    }

    @media (min-width: 960px) {
      .ui-section {
        padding-top: 70px;
        padding-bottom: 70px;
      }
    }

    .ui-section--no-padding {
      padding-top: 0;
      padding-bottom: 0;
    }

    .ui-section--primary {
      background-color: #f8f8f8;
    }
  `;

  @property({type: Boolean})
  noPadding: boolean = false;

  @property({type: Boolean})
  primary: boolean = false;

  render() {
    console.log(this.noPadding);

    return html`<div class="ui-section ${this.noPadding ? 'ui-section--no-padding' : ''} ${this.primary ? 'ui-section--primary' : ''}">
      <slot></slot>
    </div>`;
  }
}
