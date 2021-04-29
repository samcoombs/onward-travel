const toTopBtn = document.querySelector("#btt");

//////////////////////////////////////////////////////////
// BACK TO TOP BUTTON

// toTopBtn

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

toTopBtn.addEventListener("click", scrollToTop);
