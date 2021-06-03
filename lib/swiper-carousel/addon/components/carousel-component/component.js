import Component from '@glimmer/component';
import Swiper from 'swiper';

export default class CarouselComponent extends Component {
  onDidInsert() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev',
        disabledClass: 'carousel-button--disabled',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    });
  }
}
