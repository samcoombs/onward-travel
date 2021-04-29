"use strict";
gsap.registerPlugin(ScrollTrigger);

// VARIABLES
//////////////////////////////////////////////////////////

const locationHeader = document.querySelector(".location__header");
const locationSections = document.querySelectorAll("#location-section");
const locationLeftSide = document.querySelectorAll("#location-left");
const locationRightSide = document.querySelectorAll("#location-right");
let slideIn;

// FADE IN SCROLL TRIGGER
//////////////////////////////////////////////////////////

// If statement will make the slide in responsive
if (window.innerWidth <= 598) {
  slideIn = 10;
} else {
  slideIn = 50;
}

// Scroll Trigger for Locations Page
locationLeftSide.forEach((location) => {
  location.style.opacity = 0;
  location.style.transform = `translateX(-${slideIn}px)`;
}); //Sets the default state of all LEFT side elements
locationRightSide.forEach((location) => {
  location.style.opacity = 0;
  location.style.transform = `translateX(${slideIn}px)`;
}); //Sets the default state of all RIGHT side elements

locationSections.forEach((section, i) => {
  //   Creates a scroll trigger
  let st = ScrollTrigger.create({
    trigger: section,
    start: "top center",
    // end: "bottom top",
  });

  gsap.to(locationLeftSide[i], {
    scrollTrigger: st,
    x: 0,
    opacity: 1,
    duration: 1,
  });
  gsap.to(locationRightSide[i], {
    scrollTrigger: st,
    x: 0,
    opacity: 1,
    duration: 1,
  });
});
