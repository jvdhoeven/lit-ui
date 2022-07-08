import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-navigation')
export class Navigation extends LitElement {
  static styles = css`
    .ui-navigation {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }
  `;

  @property({ type: Object })
  navigation: { label: string};

  render() {
    console.log(this.navigation)

    return html`<div class="ui-navigation">
      <slot></slot>
    </div>`;
  }
}