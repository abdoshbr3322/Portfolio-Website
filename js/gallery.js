let projects = $(".grid");

$(document).ready(function () {
  projects.isotope({
    itemSelector: ".project",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".project",
      gutter: 30,
    },
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
    let nextBtn = this.sliderEl.querySelector(".next");
    let prevBtn = this.sliderEl.querySelector(".prev");
    let image = this.sliderEl.querySelector("img");
    let closer = this.sliderEl.querySelector(".closer");
    nextBtn.addEventListener("click", () => this.next());
    image.addEventListener("click", () => this.next());
    prevBtn.addEventListener("click", () => this.prev());
    closer.addEventListener("click", this.close);
    sliderEl.onclick = (e) => {
      if (e.target === e.currentTarget) {
        this.close();
      }
    };
  }
  showPosition(current) {
    sliderEl.querySelector(".position .current").textContent = parseInt(current) + 1;
  }
  openGallery(img) {
    sliderEl.querySelector("img").src = img.src;
    sliderEl.classList.add("active");
    this.index = img.dataset.index;
    this.showPosition(this.index);
  }
  next() {
    this.index++;
    if (this.index == this.gallery.children.length) {
      this.index = 0;
    }
    let currentImg = this.gallery.children[this.index];
    this.openGallery(currentImg.querySelector("img"));
  }
  prev() {
    this.index--;
    if (this.index == -1) {
      this.index = this.gallery.children.length - 1;
    }
    let currentImg = this.gallery.children[this.index];
    this.openGallery(currentImg.querySelector("img"));
  }
  close() {
    sliderEl.classList.remove("active");
  }
}

let sliderEl = document.querySelector(".gallery");
let portfolio = document.querySelector(".portfolio .content");
let slider = new Slider(portfolio, sliderEl);
slider.init();
