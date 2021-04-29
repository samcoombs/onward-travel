const loadBtn = document.querySelector("#loadmore-btn");
const loadDiv = document.querySelector(".loadmore");
const hiddenBlogs = document.querySelectorAll(".hidden-blog");
let blogIndex = 0;

//////////////////////////////////////////////////////////
// Load More Button - Blogs Page

loadBtn.addEventListener("click", () => {
  if (blogIndex >= hiddenBlogs.length - 1) {
    hiddenBlogs[blogIndex].style.display = "block"; // Allows the event listener to display the final block before hiding the button
    loadDiv.style.display = "none";
  } else {
    hiddenBlogs[blogIndex].style.display = "block";
    blogIndex++;
  }
});
