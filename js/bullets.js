let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletscontainer = document.querySelector(".nav-bullets");
let bullets_Yes = document.querySelector(".bullets-option .yes");
let bullets_No = document.querySelector(".bullets-option .no");

let bulletsLocalItem = localStorage.getItem("bullets-option");

if (bulletsLocalItem === "flex") {
  bulletscontainer.style.display = "flex";
  bullets_Yes.classList.add("active");
  bullets_No.classList.remove("active");
} else {
  bulletscontainer.style.display = "none";
  bullets_Yes.classList.remove("active");
  bullets_No.classList.add("active");
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (ele) => {
    ele.style.background = "red";
    if (span.dataset.display === "yes") {
      bulletscontainer.style.display = "flex";
      localStorage.setItem("bullets-option", "flex");
    } else {
      bulletscontainer.style.display = "none";
      localStorage.setItem("bullets-option", "none");
    }
    handelActive(ele);
  });
});
