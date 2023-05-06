import './src/sass/main.scss';
import { SidebarAnimator } from './src/js/sidebar-animator';
import { DOMEventBuilder } from './src/js/dom-event-builder';

function main() {
  const buttonHeader = document.querySelector(".header__button")
  const closeButtonHeader = document.querySelector(".menu__button-close")

  const sidebarAnimator = new SidebarAnimator()
  const domEventBuilder = new DOMEventBuilder()
  domEventBuilder.listen(buttonHeader, "click", () => sidebarAnimator.open())
  domEventBuilder.listen(closeButtonHeader, "click", () => sidebarAnimator.close())
}

main()