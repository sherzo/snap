import './src/sass/main.scss';

class SidebarOpenAnimator {
  constructor() {
    this.htmlElement = document.querySelector(".menu")
  }

  animate () {
    document.body.style.overflow = "hidden"
    this.htmlElement.style.visibility = "visible"
    this.htmlElement.style.opacity = 1
    this.htmlElement.classList.add("menu--show");
  }
}

class SidebarCloseAnimator {
  constructor() {
    this.htmlElement = document.querySelector(".menu")
  }

  animate () {
    document.body.style.overflow = "inherit"
    this.htmlElement.classList.remove("menu--show");
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

  const sidebarOpenAnimator = new SidebarOpenAnimator()
  const sidebarCloseAnimator = new SidebarCloseAnimator()
  const domEventBuilder = new DOMEventBuilder()
  domEventBuilder.listen(buttonHeader, "click", () => sidebarOpenAnimator.animate())
  domEventBuilder.listen(closeButtonHeader, "click", () => sidebarCloseAnimator.animate())
}

main()