import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-button')
export class Button extends LitElement {
  static styles = css`
    .ui-button {
      margin: 0;
      border: none;
      overflow: visible;
      font: inherit;
      color: inherit;
      text-transform: none;
      -webkit-appearance: none;
      border-radius: 0;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 30px;
      vertical-align: middle;
      font-size: .875rem;
      line-height: 38px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: .1s ease-in-out;
      transition-property: color,background-color,border-color;
    }

    .ui-button--variant-primary {
      background-color: #1e87f0;
      color: #fff;
      border: 1px solid transparent;
    }

    .ui-button--variant-secondary {
      background-color: #ffffff;
      color: #1e87f0;
      border: 1px solid #1e87f0;
    }

    .ui-button:not(:disabled) {
        cursor: pointer;
    }

    .ui-button--variant-primary:hover {
      background-color: #0f7ae5;
      color: #fff;
    }

    .ui-button--variant-secondary:hover {
      background-color: #fff;
      color: #0f7ae5;
    }

    .ui-button:hover {
        text-decoration: none;
    }

    .ui-button--variant-primary:active {
      background-color: #0e6dcd;
      color: #fff;
  }


  `;

  @property()
  variant: 'primary' | 'secondary' = 'primary';

  render() {
    return html`<button class="ui-button ui-button--variant-${this.variant}"><slot></slot></button>`;
  }
}