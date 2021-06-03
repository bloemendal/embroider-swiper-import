import Controller from '@ember/controller';
import Swiper from 'swiper';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    console.log('ues', Swiper);
  }
}
