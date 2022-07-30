$(document).ready(function () {
  // remove page loading and show the page
  let loading = $(".page-loading");
  loading.addClass("loaded");
  loading.on("transitionend", function () {
    $(this).css("display", "none");
  });
  $(document.body).addClass("loaded");

  // Open Mega Menu On Hover On Desktop
  let menu = $("nav .nav-wrapper");
  let overlay = $("nav .nav-overlay");

  checkWindowSize();
  $(window).resize(checkWindowSize);

  function checkWindowSize() {
    if (window.innerWidth >= 992) {
      menu.removeClass("menu-active");
      overlay.removeClass("menu-active");
    }
  }

  // Open ,Close Menu And Nav On Click On Mobile Screen
  let menuOpenerCloser = $(".menu-opener , .menu-closer");

  menuOpenerCloser.click(function () {
    let targetMenuSelector = $(this).attr("data-menu");
    $(targetMenuSelector).toggleClass("menu-active");
    overlay.toggleClass("menu-active");
  });

  // Close Menu On Blur

  overlay.click(() => {
    menu.removeClass("menu-active");
    overlay.removeClass("menu-active");
  });

  // Show Header And Scroll Top Button On Scroll

  let header = $("header");

  changeOnScroll(header, "fixed", 335);

  function changeOnScroll(el, className, scrollPosition) {
    checkScrollPosition(el, className, scrollPosition);
    $(window).on("scroll", () => {
      checkScrollPosition(el, className, scrollPosition);
    });
  }

  function checkScrollPosition(el, className, scrollPosition) {
    if ($(window).scrollTop() >= scrollPosition) {
      el.addClass(className);
    } else {
      el.removeClass(className);
    }
  }
});
