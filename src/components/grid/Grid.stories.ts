import { html } from 'lit';
import './Grid';


export default {
  title: 'Components/Grid',
};

export const Primary = () => html`<ui-grid container>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">1</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">2</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">3</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">4</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">5</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">6</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">7</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">8</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">9</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">10</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">11</ui-grid>
  <ui-grid item xs="1" sm="2" md="3" lg="4" xl="6">12</ui-grid>
</ui-grid>`;

export const Secondary = () => html`<ui-grid name="foo">Grid 1</ui-grid>`;