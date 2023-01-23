import './styles.scss'

const initHeader = () => {
  const header = document.querySelectorAll('.header')

  header.forEach(element => {
    new headerHandler(element as HTMLElement)
  })
}

window.addEventListener('load', initHeader)

export default class headerHandler {
  mainContainer: HTMLElement | null = null
  menuButton: HTMLButtonElement | null = null
  contactsButton: HTMLElement | null = null

  states = {
    menuIsOpen: false,
    contactsIsOpen: false,
  }

  constructor(element: HTMLElement) {
    this.mainContainer = element

    this.menuButton = this.mainContainer.querySelector('.header__button_menu')

    this.contactsButton = this.mainContainer.querySelector(
      '.header__button_contacts',
    )

    this.addListeners()

    return this
  }

  private addListeners() {
    this.contactsButton?.addEventListener(
      'click',
      this.setOpenContacts.bind(this),
    )

    this.menuButton?.addEventListener('click', this.setOpenMenu.bind(this))
  }

  private setOpenMenu() {
    const menu = document.querySelector('.services-menu') as HTMLElement
    const contacts = document.querySelector('.contacts') as HTMLElement

    this.states.menuIsOpen = !this.states.menuIsOpen

    if (this.states.contactsIsOpen) {
      contacts.classList.remove('contacts_active')
      document.body.style.overflow = 'auto'

      this.states.contactsIsOpen = false
    }

    if (this.states.menuIsOpen) {
      menu.classList.add('services-menu_active')
      document.body.style.overflow = 'hidden'
    } else {
      menu.classList.remove('services-menu_active')
      document.body.style.overflow = 'auto'
    }
  }

  private setOpenContacts() {
    const menu = document.querySelector('.services-menu') as HTMLElement
    const contacts = document.querySelector('.contacts') as HTMLElement

    this.states.contactsIsOpen = !this.states.contactsIsOpen

    if (this.states.menuIsOpen) {
      menu.classList.remove('services-menu_active')

      document.body.style.overflow = 'auto'

      this.states.menuIsOpen = false

      if (this.states.contactsIsOpen) {
        contacts.classList.add('contacts_active')

        console.log('activeCOntacts')

        document.body.style.overflow = 'hidden'
      } else {
        console.log('ss')

        contacts.classList.remove('contacts_active')

        document.body.style.overflow = 'auto'
      }
    } else {
      if (this.states.contactsIsOpen) {
        contacts.classList.add('contacts_active')

        document.body.style.overflow = 'hidden'
      } else {
        contacts.classList.remove('contacts_active')

        document.body.style.overflow = 'auto'
      }
    }
  }
}
