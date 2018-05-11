var menuContainer = document.querySelector(".page-header");

if (menuContainer) {
  var menu = menuContainer.querySelector(".main-nav");
  var menuToggle = menuContainer.querySelector(".menu-toggle");

  menu.classList.add("page-header__main-nav--close");
  menuToggle.classList.add("menu-toggle--open");
  menuToggle.classList.add("page-header__menu-toggle--open");

  menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle("page-header__main-nav--close");
    if (menuToggle.classList.contains("menu-toggle--open")) {
      menuToggle.classList.remove("menu-toggle--open");
      menuToggle.classList.remove("page-header__menu-toggle--open");
      menuToggle.classList.add("menu-toggle--close");
      menuToggle.classList.add("page-header__menu-toggle--close");
    } else {
      menuToggle.classList.remove("menu-toggle--close");
      menuToggle.classList.remove("page-header__menu-toggle--close");
      menuToggle.classList.add("menu-toggle--open");
      menuToggle.classList.add("page-header__menu-toggle--open");
    }

  });
}
