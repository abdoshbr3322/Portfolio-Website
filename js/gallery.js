let projects = $(".grid");

$(document).ready(function () {
  projects.isotope({
    itemSelector: ".project",
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".project",
      gutter: 30,
    },
  });
  projects.imagesLoaded(function () {
    projects.isotope("layout");
  });
});

function filter(filter) {
  projects.isotope({ filter: filter });
}

class Slider {
  constructor(gallery, sliderEl) {
    this.gallery = gallery;
    this.sliderEl = sliderEl;
  }

  init() {
    let nextBtn = this.sliderEl.find(".next");
    let prevBtn = this.sliderEl.find(".prev");
    let image = this.sliderEl.find("img");
    let closer = this.sliderEl.find(".closer");
    nextBtn.on("click", () => this.next());
    image.on("click", () => this.next());
    prevBtn.on("click", () => this.prev());
    closer.on("click", () => this.close());
    this.sliderEl.click((e) => {
      if (e.target === e.currentTarget) {
        this.close();
      }
    });
  }
  showPosition(current) {
    this.sliderEl.find(".position .current").text(parseInt(current) + 1);
  }
  openGallery(img) {
    let $img = $(img);
    this.sliderEl.find("img").attr("src", $img.attr("src"));
    this.sliderEl.addClass("active");
    this.index = $img.attr("data-index");
    this.showPosition(this.index);
  }
  next() {
    this.index++;
    if (this.index == this.gallery.children().length) {
      this.index = 0;
    }
    let currentImg = $(this.gallery.children()[this.index]);
    this.openGallery(currentImg.find("img"));
  }
  prev() {
    this.index--;
    if (this.index == -1) {
      this.index = this.gallery.children().length - 1;
    }
    let currentImg = $(this.gallery.children()[this.index]);
    this.openGallery(currentImg.find("img"));
  }
  close() {
    this.sliderEl.removeClass("active");
  }
}

let sliderEl = $(".gallery-slider");
let portfolio = $(".portfolio .content");
let slider = new Slider(portfolio, sliderEl);
slider.init();
