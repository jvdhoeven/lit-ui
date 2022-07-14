import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-heading")
export class Heading extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  
    .heading {
      line-height: 1.2;
    }

    .heading--h1 {
      color: var(--ui-heading-font-color, var(--ui-base-font-color, inherit));
      font-size: 36px;
      font-weight: 400;
      font-family: var(
        --ui-heading-font-family,
        var(--ui-base-font-family, inherit)
      );
    }

    @media (min-width: 960px) {
      .heading--h1 {
        font-size: 42px;
      }
    }

    :host([light]) .heading {
      color: white;
    }

    .heading--h2 {
      color: var(--ui-heading-font-color, var(--ui-base-font-color, inherit));
      font-size: 24px;
      font-weight: 300;
    }

    .heading--h3 {
      color: var(--ui-heading-font-color, var(--ui-base-font-color, inherit));
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 20px;
    }

    .heading--h4 {
      color: var(--ui-heading-font-color, var(--ui-base-font-color, inherit));
      font-size: 12px;
      font-weight: bold;
    }
  `;

  @property()
  variant: string = "h1";

  @property()
  component: string = "div";

  render() {
    let output = html`<div class="heading heading--${this.variant}">
      <slot></slot>
    </div>`;
    if (this.component === "h1") {
      output = html`<h1 class="heading heading--${this.variant}">
        <slot></slot>
      </h1>`;
    } else if (this.component === "h2") {
      output = html`<h2 class="heading heading--${this.variant}">
        <slot></slot>
      </h2>`;
    } else if (this.component === "h3") {
      output = html`<h3 class="heading heading--${this.variant}">
        <slot></slot>
      </h3>`;
    } else if (this.component === "h4") {
      output = html`<h4 class="heading heading--${this.variant}">
        <slot></slot>
      </h4>`;
    }
    return output;
  }
}
