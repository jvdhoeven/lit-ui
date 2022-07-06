import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../section/Section";
import "../container/Container";
import "../grid/Grid";

@customElement("ui-hero")
export class Hero extends LitElement {
  static styles = css`
    .ui-hero__image {
      text-align: center;
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
      style="background: url(${this.background})"
    >
      <ui-section>
        <ui-container>
          <ui-grid container>
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
