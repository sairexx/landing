import './styles.scss'

import Swiper, { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'

const initAdvantages = () => {
  const Advantages = document.querySelectorAll('.advantages')

  Advantages.forEach(element => {
    new AdvantagesHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initAdvantages)

export default class AdvantagesHandler {
  mainContainer: HTMLElement | null = null
  documentSlider: HTMLElement | null = null
  benefitsSlider: HTMLElement | null = null
  benefitsSliderScrollBar: HTMLElement | null = null
  buttonNext: HTMLButtonElement | null = null
  buttonPrev: HTMLButtonElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.benefitsSlider = this.mainContainer.querySelector(
      '.advantages__benefits-slider',
    ) as HTMLElement

    this.documentSlider = this.mainContainer.querySelector(
      '.advantages__document-slider',
    )

    this.benefitsSliderScrollBar = this.benefitsSlider.querySelector(
      '.advantages__benefits-slider-scrollbar',
    ) as HTMLElement

    this.buttonNext = this.mainContainer.querySelector(
      '.advantages__document-slider-button_next',
    )

    this.buttonPrev = this.mainContainer.querySelector(
      '.advantages__document-slider-button_prev',
    )

    this.initBenefitsSlider()
    this.initDocumentsSlider()

    return this
  }

  private initBenefitsSlider() {
    const swiper = new Swiper(this.benefitsSlider as HTMLElement, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,

      modules: [Scrollbar],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },
    })

    return swiper
  }

  private initDocumentsSlider() {
    const swiper = new Swiper(this.documentSlider as HTMLElement, {
      modules: [Navigation],
      loop: true,
    })

    this.buttonNext?.addEventListener('click', () => swiper.slideNext())
    this.buttonPrev?.addEventListener('click', () => swiper.slidePrev())

    return swiper
  }
}
