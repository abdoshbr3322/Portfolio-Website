$(document).ready(function () {
  let carousel = $(".owl-carousel");

  carousel.owlCarousel({
    margin: 48,
    stagePadding: 24,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dotsClass: "bullets",
    dotClass: "bullet",
    onResize: resized,
    onInitialize: resized,
  });

})

function resized() {
  this.options.items = (window.innerWidth <= 575 ? 1 : 2);
}
