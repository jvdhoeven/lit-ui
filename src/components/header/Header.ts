import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ui-header')
export class Header extends LitElement {
  static styles = css`
    .ui-header {
      height: 80px;
      background: #f8f8f8;
      display: flex;
    }

    .ui-header__logo, .ui-header__navigation {
      display: flex;
      align-items: center;
    }

    .ui-header__navigation {
      margin-left: auto;
    }
  `;

  render() {
    return html`<div class="ui-header">
        <div class="ui-header__logo">
            <ui-logo href="#"></ui-logo>
        </div>
        <div class="ui-header__navigation">
          <ui-navigation>
            <slot></slot>
          </ui-navigation>
        </div>
    </div>`;
  }
}