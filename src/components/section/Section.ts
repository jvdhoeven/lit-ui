import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-section')
export class Section extends LitElement {
  static styles = css`
    .ui-section {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    @media (min-width: 960px) {
      .ui-section {
        padding-top: 70px;
        padding-bottom: 70px;
      }
    }

    .ui-section.ui-section--primary {
      background-color: #f8f8f8;
    }
  `;

  @property({ type: Boolean })
  primary: boolean = false;

  render() {
    return html`<div class="ui-section ${(this.primary ? 'ui-section--primary' : '')}"><slot></slot></div>`;
  }
}