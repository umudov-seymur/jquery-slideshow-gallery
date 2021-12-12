$(document).ready(function () {
  const sliderItems = $(".slider-items .slider-image");
  const sliderCaption = $(".slider-caption");
  const currentSlider = $(".slider-item img");
  const nextSliderBtn = $(".slider-button-next");
  const prevSliderBtn = $(".slider-button-prev");
  let sliderIndex = 0;

  function setSliderIndex(index) {
    const sliderItemsCount = sliderItems.length - 1;

    if (index > sliderItemsCount) {
      sliderIndex = 0;
    }

    if (index < 0) {
      sliderIndex = sliderItemsCount;
    }
  }

  function showSliderCounter() {
    const sliderCounter = $(".slider-counter");
    sliderCounter.text(`${sliderIndex + 1}/${sliderItems.length}`);
  }

  function showSlide(index) {
    setSliderIndex(index);
    showSliderCounter();

    let sliderItem = sliderItems.eq(sliderIndex);
    let sliderImg = sliderItem.find("img");

    sliderItem.parent().siblings().find(".slider-image").removeClass("active");
    sliderItem.addClass("active");

    currentSlider.attr("src", sliderImg.attr("src"));
    sliderCaption.text(sliderImg.attr("alt"));
  }

  showSlide(0);
  showSliderCounter();

  $(document).on("click", ".slider-image", function () {
    sliderIndex = sliderItems.index($(this));
    showSlide(sliderIndex);
  });

  nextSliderBtn.on("click", () => {
    showSlide((sliderIndex += 1));
  });

  prevSliderBtn.on("click", () => {
    showSlide((sliderIndex -= 1));
  });
});
