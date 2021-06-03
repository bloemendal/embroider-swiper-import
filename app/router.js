import EmberRouter from '@embroider/router';
import config from 'embroider-import/config/environment';
import carouselRoutes from 'swiper-carousel/carousel-router';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  carouselRoutes(this);
  this.route('fruits');
});
