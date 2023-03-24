import './src/sass/main.scss';

function main() {
  const buttonHeader = document.querySelector(".header__button")
  const menuElement = document.querySelector(".menu")
  buttonHeader.addEventListener("click", () => {
    document.body.style.overflow = "hidden"
    menuElement.style.visibility = "visible"
    menuElement.style.opacity = 1
    menuElement.classList.add("menu--show");
  })

  const closeButtonHeader = document.querySelector(".menu__button-close")
  closeButtonHeader.addEventListener("click", () => {
    document.body.style.overflow = "inherit"
    menuElement.classList.remove("menu--show");
  })
}

main()