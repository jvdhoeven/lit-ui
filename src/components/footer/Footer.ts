import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-footer')
export class Footer extends LitElement {
  static styles = css`
  `;

  render() {
    return html`<footer class="ui-footer">
        <slot></slot>
    </footer>`;
  }
}