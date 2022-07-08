import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../section/Section";
import "../container/Container";
import "../grid/Grid";

@customElement("ui-hero")
export class Hero extends LitElement {
  static styles = css`
    .ui-hero {
      background-size: cover;
    }

    .ui-hero__container {
      margin-top: 0;
      align-items: center;
    }

    .ui-hero__image {
      text-align: center;
      display: none;
    }

    @media (min-width: 768px) {
      .ui-hero {
        height: 450px;
      }
  
      .ui-hero__container {
        height: 420px;
      }
    }

    @media (min-width: 960px) {
      .ui-hero__image {
          display: initial;
      }
    }

    :host([light]) {
      color: white;
    }
  `;

  @property()
  background: string;

  render() {
    return html`<div
      class="ui-hero"
      style="background-image: url(${this.background})"
    >
      <ui-section nopadding>
        <ui-container>
          <ui-grid container class="ui-hero__container">
            <ui-grid item md="6">
              <slot name="heading"></slot>
              <slot name="text"></slot>
              <slot name="actions"></slot>
            </ui-grid>
            <ui-grid item md="6" class="ui-hero__image">
              <slot name="image"></slot>
            </ui-grid>
          </ui-grid>
        </ui-container>
      </ui-section>
    </div>`;
  }
}
