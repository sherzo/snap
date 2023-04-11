import './src/sass/main.scss';

class SidebarAnimator {
  #htmlElement
  #animateClass = "menu--show"
  constructor() {
    this.#htmlElement = document.querySelector(".menu")
  }

  open () {
    document.body.style.overflow = "hidden"
    this.#htmlElement.style.visibility = "visible"
    this.#htmlElement.style.opacity = 1
    this.#htmlElement.classList.add(this.#animateClass);
  }

  close () {
    document.body.style.overflow = "inherit"
    this.#htmlElement.classList.remove(this.#animateClass);
  }
}

class DOMEventBuilder {
  listen(elem, event, callback) {
    elem.addEventListener(event, callback)
  }
}

function main() {
  const buttonHeader = document.querySelector(".header__button")
  const closeButtonHeader = document.querySelector(".menu__button-close")

  const sidebarAnimator = new SidebarAnimator()
  const domEventBuilder = new DOMEventBuilder()
  domEventBuilder.listen(buttonHeader, "click", () => sidebarAnimator.open())
  domEventBuilder.listen(closeButtonHeader, "click", () => sidebarAnimator.close())
}

main()