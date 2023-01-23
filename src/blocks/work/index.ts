import './styles.scss'

import Swiper, { Scrollbar, FreeMode } from 'swiper'

import 'swiper/css'

const initWork = () => {
  const work = document.querySelectorAll('.work')

  work.forEach(element => {
    new workHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initWork)

export default class workHandler {
  mainContainer: HTMLElement | null = null
  workSliders: NodeList | null = null
  tabsSlider: HTMLElement | null = null
  tabs: NodeList | null = null
  tabsContent: NodeList | null = null

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.tabsSlider = this.mainContainer.querySelector('.work__header-tabs')
    this.tabs = this.mainContainer.querySelectorAll('.work__header-tab')
    this.tabsContent = this.mainContainer.querySelectorAll('.work__tab-content')

    this.addTabsListeners()
    this.initWorkSlider()
    this.initTabsSlider()
    this.initTabs()

    return this
  }

  private initWorkSlider() {
    if (this.mainContainer) {
      this.workSliders = this.mainContainer.querySelectorAll('.work__slider')

      this.workSliders.forEach(element => {
        const slider = element as HTMLElement

        const swiper = new Swiper(slider, {
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
              scrollbar: {
                dragSize: 65,
              },
            },
            1601: {
              spaceBetween: 30,
              scrollbar: {
                dragSize: 275,
              },
            },
          },
        })

        return swiper
      })
    }

    return false
  }

  private initTabsSlider() {
    const swiper = new Swiper(this.tabsSlider as HTMLElement, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,

      breakpoints: {
        990: {
          spaceBetween: 46,
        },
        1600: {
          spaceBetween: 30,
        },
      },

      modules: [FreeMode],
    })

    return swiper
  }

  private initTabs() {
    const activeTab = this.tabsSlider?.querySelector(
      '.work__header-tab_active',
    ) as HTMLElement

    if (activeTab) {
      const targetAttribute = activeTab.getAttribute('data-content')

      if (targetAttribute) {
        const activeContent = this.mainContainer?.querySelector(
          `[data-target=${targetAttribute}]`,
        ) as HTMLElement

        activeContent.classList.add('work__tab-content_active')
      }
    }
  }

  private addTabsListeners() {
    this.tabs?.forEach(element => {
      element.addEventListener('click', this.onClick.bind(this))
    })
  }

  private onClick(event: Event) {
    this.initWorkSlider()
    const target = event.target as HTMLElement

    const targetAttribute = target.getAttribute('data-content')

    this.tabs?.forEach(element => {
      const tab = element as HTMLElement

      tab.classList.remove('work__header-tab_active')
    })

    target.classList.add('work__header-tab_active')

    if (targetAttribute) {
      this.tabsContent?.forEach(Element => {
        const content = Element as HTMLElement

        content.classList.add('work__tab-content')
        content.classList.remove('work__tab-content_active')
      })

      const activeContent = this.mainContainer?.querySelector(
        `[data-target=${targetAttribute}]`,
      ) as HTMLElement

      activeContent.classList.add('work__tab-content_active')
    }
  }
}
