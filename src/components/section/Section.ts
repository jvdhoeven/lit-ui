import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-section")
export class Section extends LitElement {
  static styles = css`
    :host {
      padding-top: 40px;
      padding-bottom: 40px;
      display: block;
    }

    @media (min-width: 960px) {
      :host {
        padding-top: 70px;
        padding-bottom: 70px;
      }
    }

    :host([primary]) {
      background-color: #f8f8f8;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
