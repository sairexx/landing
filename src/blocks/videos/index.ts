import './styles.scss'

import Swiper, { Scrollbar } from 'swiper'

import 'swiper/css'

const initVideos = () => {
  const videos = document.querySelectorAll('.videos')

  videos.forEach(element => {
    new videosHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initVideos)

export default class videosHandler {
  mainContainer: HTMLElement | null = null
  videosSliders: HTMLElement | null = null
  buttonNext: HTMLElement | null = null
  buttonPrev: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.videosSliders = this.mainContainer.querySelector('.videos__slider')

    this.buttonNext = this.mainContainer.querySelector(
      '.slider__button_slide-next',
    )
    this.buttonPrev = this.mainContainer.querySelector(
      '.slider__button_slide-prev',
    )

    this.initVideosSlider()

    return this
  }

  private initVideosSlider() {
    const swiper = new Swiper(this.videosSliders as HTMLElement, {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      slidesPerView: 'auto',
      spaceBetween: 30,
      observer: true,
      // freeMode: true,

      modules: [Scrollbar],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },
      breakpoints: {
        900: {
          slidesPerView: 'auto',
        },
      },
    })

    const beforeElement = this.mainContainer?.querySelector(
      '.slider-before',
    ) as HTMLElement

    const afterElement = this.mainContainer?.querySelector(
      '.slider-after',
    ) as HTMLElement

    beforeElement.style.opacity = '0'
    beforeElement.style.zIndex = '-1'

    this.buttonNext?.addEventListener('click', () => swiper.slideNext())
    this.buttonPrev?.addEventListener('click', () => swiper.slidePrev())

    swiper.on('slideChange', () => {
      if (swiper.realIndex === 0) {
        afterElement.style.opacity = '1'
        afterElement.style.zIndex = '1'

        beforeElement.style.opacity = '0'
        beforeElement.style.zIndex = '-1'
      }

      if (swiper.realIndex === swiper.slides.length) {
        afterElement.style.opacity = '0'
        afterElement.style.zIndex = '-1'
      }

      if (swiper.realIndex > 0) {
        beforeElement.style.opacity = '1'
        beforeElement.style.zIndex = '1'
      }
    })

    swiper.on('reachEnd', () => {
      const afterElement = this.mainContainer?.querySelector(
        '.slider-after',
      ) as HTMLElement

      afterElement.style.opacity = '0'
      afterElement.style.zIndex = '-1'
    })

    return swiper
  }
}
