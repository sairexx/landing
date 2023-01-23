import './styles.scss'

import Swiper, { Scrollbar, FreeMode } from 'swiper'

import 'swiper/css'

const initLicenses = () => {
  const licenses = document.querySelectorAll('.licenses')

  licenses.forEach(element => {
    new LicensesHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initLicenses)

export default class LicensesHandler {
  mainContainer: HTMLElement | null = null
  licensesSliders: HTMLElement | null = null
  buttonNext: HTMLElement | null = null
  buttonPrev: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.licensesSliders = this.mainContainer.querySelector('.licenses__slider')

    this.buttonNext = this.mainContainer.querySelector(
      '.licenses__button_slide-next',
    )
    this.buttonPrev = this.mainContainer.querySelector(
      '.licenses__button_slide-prev',
    )

    this.initLicensesSlider()

    return this
  }

  private initLicensesSlider() {
    const swiper = new Swiper(this.licensesSliders as HTMLElement, {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      slidesPerView: 'auto',
      spaceBetween: 20,
      observer: true,
      freeMode: true,

      modules: [Scrollbar, FreeMode],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },

      breakpoints: {
        990: {
          spaceBetween: 20,
        },
        1601: {
          spaceBetween: 30,
        },
      },
    })

    this.buttonNext?.addEventListener('click', () => swiper.slideNext())
    this.buttonPrev?.addEventListener('click', () => swiper.slidePrev())

    return swiper
  }
}
