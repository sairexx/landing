import './styles.scss'

import Swiper, { Scrollbar } from 'swiper'

import 'swiper/css'

const initStages = () => {
  const stages = document.querySelectorAll('.stages')

  stages.forEach(element => {
    new AdvantagesHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initStages)

export default class AdvantagesHandler {
  mainContainer: HTMLElement | null = null
  stagesSlider: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.stagesSlider = this.mainContainer.querySelector('.stages__slider')

    this.initStagesSlider()

    return this
  }

  private initStagesSlider() {
    const swiper = new Swiper(this.stagesSlider as HTMLElement, {
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
}
