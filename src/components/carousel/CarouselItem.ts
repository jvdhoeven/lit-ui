import { LitElement, css, html, CSSResultGroup } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";

@customElement("ui-carousel-item")
export class CarouselItem extends LitElement {
  static styles: CSSResultGroup = css``;
  render() {
    return html`<div class="ui-carousel-item">
      <slot></slot>
    </div>`;
  }
}
