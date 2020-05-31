let controller;
let slideScene;

function animateSlides() {
  controller = new ScrollMagic.Controller();

  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    const sliderT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    sliderT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    sliderT1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    sliderT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    sliderT1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
