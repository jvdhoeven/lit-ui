import { LitElement, css, html, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-card")
export class Card extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      width: 100%;
    }

    .ui-card {
      box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
      padding: 30px 30px;
      display: block;
    }

    .ui-card--no-padding {
      padding: 0;
    }

    .ui-card--match-height {
      height: 100%;
      box-sizing: border-box;
    }
  `;

  @property({type: Boolean})
  noPadding: boolean = false;

  @property({type: Boolean})
  match: boolean = false;

  render() {
    return html`<div class="ui-card ${this.noPadding ? 'ui-card--no-padding' : ''} ${this.match ? 'ui-card--match-height' : ''}">
      <slot name="body"></slot>
    </div>`;
  }
}
