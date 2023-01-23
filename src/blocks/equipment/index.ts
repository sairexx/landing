import './styles.scss'

import Swiper, { Scrollbar, FreeMode } from 'swiper'

import 'swiper/css'

const initEquipment = () => {
  const equipment = document.querySelectorAll('.equipment')

  equipment.forEach(element => {
    new equipmentHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initEquipment)

export default class equipmentHandler {
  mainContainer: HTMLElement | null = null
  equipmentSliders: HTMLElement | null = null
  buttonNext: HTMLElement | null = null
  buttonPrev: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.equipmentSliders =
      this.mainContainer.querySelector('.equipment__slider')

    this.buttonNext = this.mainContainer.querySelector(
      '.equipment__button_slide-next',
    )
    this.buttonPrev = this.mainContainer.querySelector(
      '.equipment__button_slide-prev',
    )

    this.initEquipmentSlider()

    return this
  }

  private initEquipmentSlider() {
    const swiper = new Swiper(this.equipmentSliders as HTMLElement, {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      slidesPerView: 3,
      spaceBetween: 32,
      observer: true,
      freeMode: true,

      modules: [Scrollbar, FreeMode],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },
    })

    this.buttonNext?.addEventListener('click', () => swiper.slideNext())
    this.buttonPrev?.addEventListener('click', () => swiper.slidePrev())

    return swiper
  }
}
