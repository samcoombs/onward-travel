//////////////////////////////////////////////////////////
// Form Submitted Successfully

const contactForm = document.querySelector("#contact-submit");
const submitted = document.querySelector(".submitted");

submitted.style.transform = "translateY(10rem)";
// submitted.style.display = "none";

contactForm.addEventListener("click", function (e) {
  e.preventDefault();
  gsap.to(submitted, {
    y: 0,
    display: "flex",
  });

  setTimeout("location.reload()", 1500);
});
