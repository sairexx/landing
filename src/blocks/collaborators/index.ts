import './styles.scss'

import Swiper, { Scrollbar, FreeMode } from 'swiper'

import 'swiper/css'

const initCollaborators = () => {
  const collaborators = document.querySelectorAll('.collaborators')

  collaborators.forEach(element => {
    new collaboratorsHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initCollaborators)

export default class collaboratorsHandler {
  mainContainer: HTMLElement | null = null
  collaboratorsSliders: HTMLElement | null = null
  buttonNext: HTMLElement | null = null
  buttonPrev: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.collaboratorsSliders = this.mainContainer.querySelector(
      '.collaborators__slider',
    )

    this.buttonNext = this.mainContainer.querySelector(
      '.collaborators__button_slide-next',
    )
    this.buttonPrev = this.mainContainer.querySelector(
      '.collaborators__button_slide-prev',
    )

    this.initCollaboratorsSlider()

    return this
  }

  private initCollaboratorsSlider() {
    const swiper = new Swiper(this.collaboratorsSliders as HTMLElement, {
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
          spaceBetween: 30,
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
