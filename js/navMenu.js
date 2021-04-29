"use strict";

// navMenu is in a seperate file as main.js is only needed for the homepage where the nav will be used on all pages

// Nav Menu Variables
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
let navMenuIsOpen = false;

// if (window.screen.width <= 940) {
//   navList.style.display = "none";
// } else {
//   navList.style.display = "flex";
// }

// NAV MENU
const openNavMenu = function () {
  if (!navMenuIsOpen) {
    gsap.to(navList, {
      left: 0,
      duration: 0.5,
      ease: "sine.out",
      display: "flex",
    });
    navMenuIsOpen = true;
  } else {
    gsap.to(navList, {
      left: "100vw",
      duration: 0.5,
      ease: "sine.out",
      display: "none",
    });
    navMenuIsOpen = false;
  }
};

// Mobile Nav Menu
hamburger.addEventListener("click", openNavMenu);
