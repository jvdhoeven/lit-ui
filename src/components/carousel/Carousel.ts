import { LitElement, css, html, CSSResultGroup, PropertyValueMap } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { CarouselItem } from "./CarouselItem";

@customElement("ui-carousel")
export class Carousel extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      width: 100%;
    }

    ::slotted(.slide-hidden) {
        //display: none;
    }

    .ui-carousel {
        position: relative;
    }

    .ui-carousel__item-container {
        display: flex;
        overflow: auto;
        flex: 0 0 auto;
        flex-flow: row nowrap;
        scroll-snap-type: x mandatory;
        gap: 20px;
    }

    .ui-carousel__item-container ::slotted(ui-carousel-item) {
        flex: 0 0 auto;
        width: 100%;
        scroll-snap-align: center;
    }

    @media (min-width: 768px) {
        .ui-carousel__item-container ::slotted(ui-carousel-item) {
            width: calc((100% / 3) - 20px);
        }
    }

    @media (min-width: 960px) {
        .ui-carousel__item-container ::slotted(ui-carousel-item) {
            width: calc((100% / 5) - 40px);
        }
    }

    .ui-carousel__indicator {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .ui-carousel__indicator-item {
        margin-right: 12px;
        display: block;
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: 0 0;
        text-indent: 100%;
        overflow: hidden;
        white-space: nowrap;
        border: 1px solid rgba(102,102,102,.4);
        cursor: pointer;
    }

    .ui-carousel__indicator-item:last-child {
        margin-right: 0;
    }

    .ui-carousel__indicator-item--active {
        background-color: rgba(102,102,102,.6);
        border-color: transparent;
    }

    .ui-carousel__prev, .ui-carousel__next {
        position: absolute;
        top: 50%;
        display: block;
        width: 40px;
        height: 40px;
        transform: translateY(-50%);
    }

    .ui-carousel__prev {
        left: -50px;
    }

    .ui-carousel__next {
        right: -50px;
    }

  `;

  @queryAssignedElements()
  carouselElements: CarouselItem[];

  @property({attribute: false})
  _carouselElements: CarouselItem[] = [];

  @property({ type: Number})
  slideIndex = 0;

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this._carouselElements = this.carouselElements;
    this.navigateSlide();
  }

  protected override updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    this.navigateSlide();
  }

  navigateSlide() {
    this.carouselElements.forEach((item, index) => {
        if(index === this.slideIndex) {
            item.scrollIntoView({behavior: "smooth", inline: "center"});
        }
    })
  }

  selectSlide(slideIndex: number) {
    this.slideIndex = slideIndex;
  }

  changeSlide(offset: number) {
    const slideCount = this.carouselElements.length;
    this.slideIndex = (slideCount + ((this.slideIndex + offset) % slideCount)) % slideCount;
  }

  prevSlide(event: Event) {
    event.preventDefault()
    this.changeSlide(-1);
  }

  nextSlide(event: Event) {
    event.preventDefault()
    this.changeSlide(1);
  }

  render() {   
    return html`<div class="ui-carousel">
        <div class="ui-carousel__item-container">
            <slot></slot>
        </div>
        <ul class="ui-carousel__indicator">
           ${this.carouselElements.map((item, index) => html`<li class="ui-carousel__indicator-item ${ this.slideIndex === index ? 'ui-carousel__indicator-item--active' : ''}" @click=${() => { this.selectSlide(index) }}></li>`)}
        </ul>
        <a href="#" class="ui-carousel__prev" @click=${this.prevSlide}>
            <ui-icon icon="arrow-left"></ui-icon>
        </a>
        <a href="#" class="ui-carousel__next" @click=${this.nextSlide}>
            <ui-icon icon="arrow-right"></ui-icon>
        </a>
    </div>`;
  }
}
