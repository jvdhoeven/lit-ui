import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-list')
export class List extends LitElement {
  static styles = css`
    .ui-list {
        list-style-type: none;
        padding: 0;
        margin: 10px 0;
    }

    .ui-list ::slotted(li) {
      margin-top: 10px;
    }
  `;

  render() {
    return html`<ul class="ui-list">
        <slot></slot>
    </ul>`;
  }
}