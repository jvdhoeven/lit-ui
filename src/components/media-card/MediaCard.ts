import { LitElement, css, html, CSSResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Card } from "../card/Card";

@customElement("ui-media-card")
export class MediaCard extends Card {
  static styles: CSSResultGroup = [
    css`
      .ui-media-card {
        display: flex;
        flex-direction: column;
      }

      .ui-media-card__media {
        flex: auto;
      }

      .ui-media-card__body {
        flex: auto;
        padding: 30px;
        box-sizing: border-box;
      }

      @media (min-width: 768px) {
        .ui-media-card {
          flex-direction: row;
        }

        .ui-media-card--position-right {
          flex-direction: row-reverse;
        }

        .ui-media-card__media {
          flex: 1 1 50%;
          max-height: 300px;
        }

        .ui-media-card__body {
          flex: 1 1 50%;
        }
      }

      
    `,
    Card.styles
  ]

  @property({ type: String})
  position: string;

  constructor() {
    super();
  }

  render() {
    return html`<div class="ui-card ${this.noPadding ? 'ui-card--no-padding' : ''} ${this.match ? 'ui-card--match-height' : ''}">
      <div class="ui-media-card ${this.position === 'right' ? 'ui-media-card--position-right' : ''}">
        <div class="ui-media-card__media">
          <slot name="media"></slot>
        </div>
        <div class="ui-media-card__body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>`;
  }
}
