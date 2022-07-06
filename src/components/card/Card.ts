import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-card")
export class Card extends LitElement {
  static styles = css`
    :host {
      box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
      padding: 30px 30px;
      display: block;
    }

    :host-context([match]) {
      flex: auto;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
