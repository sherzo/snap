export class SidebarAnimator {
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