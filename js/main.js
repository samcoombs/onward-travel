"use strict";

// DOM event listener to activate Glide carousel -- Also responsible for all of the script
document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 150,
    perView: 3,
    dragThreshold: false,
    swipeThreshold: false,
  }).mount(); //Creates a new Glider

  // VARIABLES
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const background = document.querySelector(".background-hover");
  const backgroundImg = [
    "bali-bg.jpg",
    "vietnam-bg.jpg",
    "cambodia-bg.jpg",
    "thailand-bg.jpg",
  ];
  const title = document.querySelectorAll(".main-title");
  const description = document.querySelectorAll(".main-text__homepage");
  // const canvasBg = document.

  let index = 0;

  let titleChange = 0; // This will be how many pixels the description will move up
  let descriptionChange = 0; // This will be how many pixels the description will move up
  let titleAdjustHeight; //To allow the title animation to be responsive
  let descriptionAdjustHeight; //To allow the decription animation to be responsive

  // Explore Button Variables
  const exploreBtn = document.querySelector(".text__btn--link");
  const exploreBtnLinks = [
    "../destinations/bali.html",
    "../destinations/vietnam.html",
    "../destinations/cambodia.html",
    "../destinations/thailand.html",
  ];

  // HOVER - Background transition
  // Hover JS only allows for transitions between 2 images meaning there needs to be multiple myAnimations

  var myAnimation1 = new hoverEffect({
    parent: document.querySelector(".background-hover"),
    intensity: 0.1,
    image1: `../img/homepage/${backgroundImg[0]}`,
    image2: `../img/homepage/${backgroundImg[1]}`,
    displacementImage: "../img/homepage/distortion.jpg",
    hover: false,
  });

  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".background-hover"),
    intensity: 0.1,
    image1: `../img/homepage/${backgroundImg[1]}`,
    image2: `../img/homepage/${backgroundImg[2]}`,
    displacementImage: "../img/homepage/distortion.jpg",
    hover: false,
  });

  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".background-hover"),
    intensity: 0.1,
    image1: `../img/homepage/${backgroundImg[2]}`,
    image2: `../img/homepage/${backgroundImg[3]}`,
    displacementImage: "../img/homepage/distortion.jpg",
    hover: false,
  });

  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".background-hover"),
    intensity: 0.1,
    image1: `../img/homepage/${backgroundImg[3]}`,
    image2: `../img/homepage/${backgroundImg[0]}`,
    displacementImage: "../img/homepage/distortion.jpg",
    hover: false,
  });

  const distortAnimations = [
    myAnimation1,
    myAnimation2,
    myAnimation3,
    myAnimation4,
  ];

  const nextDistortAnimation = function () {
    let prevIndex = index;
    index = (index + 1) % 4;
    distortAnimations[prevIndex].next();
    textAnimation("next");
    setTimeout(() => {
      const canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1200);
  };

  const prevDistortAnimation = function () {
    index = index - 1 < 0 ? 3 : index - 1;
    distortAnimations[index].next();
    textAnimation("prev");
    setTimeout(() => {
      const canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      distortAnimations[index].previous();
    }, 500);
  };

  // Text Transition
  const textAnimation = function (direction) {
    //If statement changes the how many pixels titlechange will move up by
    if (window.innerWidth <= 1417 && window.innerWidth > 424) {
      titleAdjustHeight = 87;
      descriptionAdjustHeight = 106;
    } else if (window.innerWidth <= 424) {
      titleAdjustHeight = 64;
    } else {
      titleAdjustHeight = 116;
      descriptionAdjustHeight = 104;
    }

    if (titleChange === 0 && direction === "prev") {
      titleChange = -(titleAdjustHeight * 3);
    } else if (
      titleChange === -(titleAdjustHeight * 3) &&
      direction === "next"
    ) {
      titleChange = 0;
    } else {
      titleChange =
        direction === "next"
          ? titleChange - titleAdjustHeight
          : titleChange + titleAdjustHeight;
    }

    if (descriptionChange === 0 && direction === "prev") {
      descriptionChange = -(descriptionAdjustHeight * 3);
    } else if (
      descriptionChange === -(descriptionAdjustHeight * 3) &&
      direction === "next"
    ) {
      descriptionChange = 0;
    } else {
      descriptionChange =
        direction === "next"
          ? descriptionChange - descriptionAdjustHeight
          : descriptionChange + descriptionAdjustHeight;
    }

    title.forEach((title) => {
      gsap.to(title, {
        y: titleChange,
        ease: "power1.inOut",
        duration: 1,
      });
    });

    description.forEach((description, i) => {
      let opacity = 0;
      if (i === index) {
        opacity = 1;
      } else {
        opacity = 0;
      }
      gsap.to(description, {
        y: descriptionChange,
        ease: "power1.inOut",
        duration: 1,
        opacity,
      });
    });
  };

  // EXPLORE BUTTON
  //Sets the default link to go to bali.html
  exploreBtn.setAttribute("href", exploreBtnLinks[0]);

  //Iterates down throught the array and changes the href accordingly
  const exploreHrefIteratorAdd = function () {
    index = index++ % 4;
    exploreBtn.setAttribute("href", exploreBtnLinks[index]);
  };

  //Iterates up throught the array and changes the href accordingly
  const exploreHrefIteratorMinus = function () {
    index = index-- % 4;
    exploreBtn.setAttribute("href", exploreBtnLinks[index]);
  };

  // EVENT LISTENERS
  // Control Buttons
  nextBtn.addEventListener("click", nextDistortAnimation);
  nextBtn.addEventListener("click", exploreHrefIteratorAdd);

  prevBtn.addEventListener("click", prevDistortAnimation);
  prevBtn.addEventListener("click", exploreHrefIteratorMinus);
});
