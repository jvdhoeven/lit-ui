import { LitElement, css, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import iosButton from "./appstore.png";
import androidButton from "./playstore.png";

@customElement("ui-app-button")
export class AppButton extends LitElement {
  static styles = css`
    .ui-app-button {
      display: inline-block;
    }

    .ui-app-button--ios {
      width: 158px;
      height: 54px;
      background: url(${unsafeCSS(iosButton)});
    }

    .ui-app-button--android {
      width: 175px;
      height: 54px;
      background: url(${unsafeCSS(androidButton)});
    }
  `;

  @property()
  os: string = "ios";

  @property()
  link: string;

  render() {
    return html`<a class="ui-app-button ui-app-button--${this.os}"></a>`;
  }
}
