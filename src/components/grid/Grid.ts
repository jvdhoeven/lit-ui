import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-grid')
export class Grid extends LitElement {
  static styles = css`
    :host([container]) {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    :host([item]) {
      flex: 1 1 100%;
    }

    @media (min-width: 480px) {
      :host([item][sm="1"]) {
        flex-basis: calc(100% / 12 * 1);
      }
      :host([item][sm="2"]) {
        flex-basis: calc(100% / 12 * 2);
      }
      :host([item][sm="3"]) {
        flex-basis: calc(100% / 12 * 3);
      }
      :host([item][sm="4"]) {
        flex-basis: calc(100% / 12 * 4);
      }
      :host([item][sm="5"]) {
        flex-basis: calc(100% / 12 * 5);
      }
      :host([item][sm="6"]) {
        flex-basis: calc(50%);
      }
      :host([item][sm="7"]) {
        flex-basis: calc(100% / 12 * 7);
      }
      :host([item][sm="8"]) {
        flex-basis: calc(100% / 12 * 8);
      }
      :host([item][sm="9"]) {
        flex-basis: calc(100% / 12 * 9);
      }
      :host([item][sm="10"]) {
        flex-basis: calc(100% / 12 * 10);
      }
      :host([item][sm="11"]) {
        flex-basis: calc(100% / 12 * 11);
      }
      :host([item][sm="12"]) {
        flex-basis: 100%;
      }
    }

    @media (min-width: 768px) {
      :host([item][md="1"]) {
        flex-basis: calc(100% / 12 * 1);
      }
      :host([item][md="2"]) {
        flex-basis: calc(100% / 12 * 2);
      }
      :host([item][md="3"]) {
        flex-basis: calc(100% / 12 * 3);
      }
      :host([item][md="4"]) {
        flex-basis: calc(100% / 12 * 4);
      }
      :host([item][md="5"]) {
        flex-basis: calc(100% / 12 * 5);
      }
      :host([item][md="6"]) {
        flex-basis: calc(50%);
      }
      :host([item][md="7"]) {
        flex-basis: calc(100% / 12 * 7);
      }
      :host([item][md="8"]) {
        flex-basis: calc(100% / 12 * 8);
      }
      :host([item][md="9"]) {
        flex-basis: calc(100% / 12 * 9);
      }
      :host([item][md="10"]) {
        flex-basis: calc(100% / 12 * 10);
      }
      :host([item][md="11"]) {
        flex-basis: calc(100% / 12 * 11);
      }
      :host([item][md="12"]) {
        flex-basis: 100%;
      }
    }

    @media (min-width: 960px) {
      :host([item][lg="1"]) {
        flex-basis: calc(100% / 12 * 1);
      }
      :host([item][lg="2"]) {
        flex-basis: calc(100% / 12 * 2);
      }
      :host([item][lg="3"]) {
        flex-basis: calc(100% / 12 * 3);
      }
      :host([item][lg="4"]) {
        flex-basis: calc(100% / 12 * 4);
      }
      :host([item][lg="5"]) {
        flex-basis: calc(100% / 12 * 5);
      }
      :host([item][lg="6"]) {
        flex-basis: calc(50%);
      }
      :host([item][lg="7"]) {
        flex-basis: calc(100% / 12 * 7);
      }
      :host([item][lg="8"]) {
        flex-basis: calc(100% / 12 * 8);
      }
      :host([item][lg="9"]) {
        flex-basis: calc(100% / 12 * 9);
      }
      :host([item][lg="10"]) {
        flex-basis: calc(100% / 12 * 10);
      }
      :host([item][lg="11"]) {
        flex-basis: calc(100% / 12 * 11);
      }
      :host([item][lg="12"]) {
        flex-basis: 100%;
      }
    }

    @media (min-width: 1200px) {
      :host([item][xl="1"]) {
        flex-basis: calc(100% / 12 * 1);
      }
      :host([item][xl="2"]) {
        flex-basis: calc(100% / 12 * 2);
      }
      :host([item][xl="3"]) {
        flex-basis: calc(100% / 12 * 3);
      }
      :host([item][xl="4"]) {
        flex-basis: calc(100% / 12 * 4);
      }
      :host([item][xl="5"]) {
        flex-basis: calc(100% / 12 * 5);
      }
      :host([item][xl="6"]) {
        flex-basis: calc(50%);
      }
      :host([item][xl="7"]) {
        flex-basis: calc(100% / 12 * 7);
      }
      :host([item][xl="8"]) {
        flex-basis: calc(100% / 12 * 8);
      }
      :host([item][xl="9"]) {
        flex-basis: calc(100% / 12 * 9);
      }
      :host([item][xl="10"]) {
        flex-basis: calc(100% / 12 * 10);
      }
      :host([item][xl="11"]) {
        flex-basis: calc(100% / 12 * 11);
      }
      :host([item][xl="12"]) {
        flex-basis: 100%;
      }
    }
    
  `;

  render() {
    return html`<slot></slot>`;
  }
}