"use strict";

// Touch Screen?
const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

// Ширина екрану
const maxWidth =
  +document.querySelector(".menu-footer").dataset.spollersInit || 600;

// Футер в константу
const menuFooter = document.querySelector(".menu-footer");

// Вся сторінка завантажена
window.addEventListener("load", windowLoaded);

function windowLoaded() {
  // Додати клас "loaded" для body при повному завантаженні
  document.body.classList.add("loaded");

  // Події
  let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;

    // Блокування відкриття та закриття Footer Spollers до вказаної ширини + додавання анімації (акордеон)

    if (targetElement.closest(".menu-footer__title")) {
      if (window.innerWidth <= maxWidth) {
        if (!menuFooter.querySelectorAll("._slide").length) {
          const footerActiveSpoller = document.querySelector(
            ".menu-footer__item[open]"
          );
          const footerSpollerTitle = targetElement.closest(
            ".menu-footer__title"
          );
          if (
            footerActiveSpoller &&
            footerActiveSpoller !== targetElement.closest(".menu-footer__item")
          ) {
            spollersAnim(
              footerActiveSpoller.querySelector(".menu-footer__title"),
              false
            );
          }
          spollersAnim(footerSpollerTitle);
        }
      }
      e.preventDefault();
    }

    // Відкриття мов в header при кліку
    if (isTouchScreen) {
      if (targetElement.closest(".lang-header-top")) {
        const langHeader = targetElement.closest(".lang-header-top");
        langHeader.classList.toggle("--active");
      } else {
        document.querySelector(".lang-header-top").classList.remove("--active");
      }
    }

    // Відкриття contacts в header при кліку (окрім кліку на посилання всередені (A))
    if (targetElement.closest(".contacts-header")) {
      if (targetTag !== "A") {
        const contactsHeader = targetElement.closest(".contacts-header");
        contactsHeader.classList.toggle("--active");
      }
    } else {
      document.querySelector(".contacts-header").classList.remove("--active");
    }

    // Відкриття catalog
    if (targetElement.closest(".button-header-catalog")) {
      const itemsCatalogMenu = document.querySelector(".items-catalog-header");
      document.documentElement.style.setProperty(
        "--menu-catalog-top",
        `${itemsCatalogMenu.getBoundingClientRect().top + 20}px`
      );
      document.documentElement.classList.toggle("catalog-open");
    } else {
      document.documentElement.classList.remove("catalog-open");
    }
  };

  document.addEventListener("click", documentActions);

  // Прибрати tab для Title при відкритому Footer Spollers
  let spollersInit = (footerSpollers, isOpen) => {
    footerSpollers.forEach((footerSpoller) => {
      const footerSpollerTitle = footerSpoller.querySelector(
        ".menu-footer__title"
      );
      footerSpoller.classList.toggle("_init", !isOpen);
      isOpen
        ? footerSpollerTitle.setAttribute("tabindex", "-1")
        : footerSpollerTitle.removeAttribute("tabindex");
      footerSpoller.open = isOpen;
    });
  };

  // Анімація - акордион для Footer Spollers
  let spollersAnim = (footerSpollerTitle, action) => {
    const footerSpoller = footerSpollerTitle.closest(".menu-footer__item");
    const footerSpollerBody = footerSpollerTitle.nextElementSibling;

    let spollersAnimClose = () => {
      if (!footerSpollerTitle.classList.contains("_slide")) {
        footerSpollerTitle.classList.add("_slide");
        const footerSpollerBodyHeight = footerSpollerBody.offsetHeight;
        footerSpollerBody.style.height = `${footerSpollerBodyHeight}px`;
        footerSpollerBody.style.overflow = "hidden";
        footerSpollerBody.style.transitionDuration = "0.8s";
        footerSpollerBody.style.paddingTop = "0";
        footerSpollerBody.style.paddingBottom = "0";
        footerSpollerBody.style.paddingLeft = "0";
        footerSpollerBody.style.paddingRight = "0";
        footerSpollerBody.offsetHeight;
        footerSpollerBody.style.height = `0px`;
        setTimeout(() => {
          footerSpoller.open = false;
          footerSpollerBody.style.removeProperty("height");
          footerSpollerBody.style.removeProperty("overflow");
          footerSpollerBody.style.removeProperty("transition-duration");

          footerSpollerBody.style.removeProperty("padding-top");
          footerSpollerBody.style.removeProperty("padding-bottom");
          footerSpollerBody.style.removeProperty("padding-left");
          footerSpollerBody.style.removeProperty("padding-right");

          footerSpollerTitle.classList.remove("_slide");
        }, 800);
      }
    };
    let spollersAnimOpen = () => {
      if (!footerSpollerTitle.classList.contains("_slide")) {
        footerSpollerTitle.classList.add("_slide");
        footerSpoller.open = true;
        const footerSpollerBodyHeight = footerSpollerBody.offsetHeight;
        footerSpollerBody.style.height = "0px";
        footerSpollerBody.style.overflow = "hidden";
        footerSpollerBody.style.paddingTop = 0;
        footerSpollerBody.style.paddingBottom = 0;
        footerSpollerBody.style.paddingLeft = 0;
        footerSpollerBody.style.paddingRight = 0;
        footerSpollerBody.style.transitionDuration = "0.8s";
        footerSpollerBody.offsetHeight;
        footerSpollerBody.style.height = `${footerSpollerBodyHeight}px`;

        footerSpollerBody.style.removeProperty("padding-top");
        footerSpollerBody.style.removeProperty("padding-bottom");
        footerSpollerBody.style.removeProperty("padding-left");
        footerSpollerBody.style.removeProperty("padding-right");

        setTimeout(() => {
          footerSpollerBody.style.removeProperty("height");
          footerSpollerBody.style.removeProperty("overflow");
          footerSpollerBody.style.removeProperty("transition-duration");

          footerSpollerTitle.classList.remove("_slide");
        }, 800);
      }
    };

    if (action !== undefined) {
      action ? spollersAnimOpen() : spollersAnimClose();
    }
    footerSpoller.open ? spollersAnimClose() : spollersAnimOpen();
  };

  // Footer Spollers
  const footerSpollers = document.querySelectorAll(".menu-footer__item");
  if (footerSpollers.length) {
    const matchMedia = window.matchMedia(`(max-width: ${maxWidth / 16}em)`);
    spollersInit(footerSpollers, !matchMedia.matches);
    matchMedia.addEventListener("change", () => {
      spollersInit(footerSpollers, !matchMedia.matches);
    });
  }

  // Move Footer Logo
  const footerLogo = document.querySelector(".social-footer__logo");
  const footerContainer = document.querySelector(".footer__container");
  const footerSocial = document.querySelector(".social-footer");

  if (footerLogo) {
    const matchMedia = window.matchMedia(`(max-width: ${767.98 / 16}em)`);
    moveFooterElements();
    matchMedia.addEventListener("change", () => {
      moveFooterElements();
    });

    function moveFooterElements() {
      matchMedia.matches
        ? footerContainer.insertAdjacentElement("beforeend", footerSocial)
        : footerContainer.insertAdjacentElement("afterbegin", footerSocial);
      matchMedia.matches
        ? footerContainer.insertAdjacentElement("afterbegin", footerLogo)
        : footerSocial.insertAdjacentElement("afterbegin", footerLogo);
    }
  }
}
