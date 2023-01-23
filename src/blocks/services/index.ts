import './styles.scss'

import Swiper, { Scrollbar } from 'swiper'

import 'swiper/css'

const initServices = () => {
  const services = document.querySelectorAll('.services')

  services.forEach(element => {
    new AdvantagesHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initServices)

export default class AdvantagesHandler {
  mainContainer: HTMLElement | null = null
  servicesSlider: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.servicesSlider = this.mainContainer.querySelector('.services__slider')

    this.initServicesSlider()

    return this
  }

  private initServicesSlider() {
    const swiper = new Swiper(this.servicesSlider as HTMLElement, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,

      modules: [Scrollbar],
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    })

    return swiper
  }
}
