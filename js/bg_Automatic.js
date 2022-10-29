let CheckRandom = document.querySelectorAll(".option-box span");

// Get Items Images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Variabuls SetInterval
let BackgroundInterval;

// Turn On And Turn Off Function Change Background
let Background;

// Change Background Automatic
function randomizeImgs() {
  if (Background === true) {
    BackgroundInterval = setInterval(function () {
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage =
        'url("images/landing/' + imgsArray[randomNumber] + '")';
    }, 3000);
  } else {
    clearInterval(BackgroundInterval);
  }
}

// Set Background In LocalStorage
let RandomLocalItem = localStorage.getItem("background-option");

if (RandomLocalItem === "true") {
  Background = true;

  randomizeImgs();

  document.querySelector(".option-box .yes").classList.add("active");
  document.querySelector(".option-box .no").classList.remove("active");
} else {
  Background = false;

  document.querySelector(".option-box .yes").classList.remove("active");
  document.querySelector(".option-box .no").classList.add("active");
}

CheckRandom.forEach((span) => {
  span.addEventListener("click", function (el) {
    handelActive(el);

    if (el.target.dataset.random === "yes") {
      Background = true;

      randomizeImgs();
      localStorage.setItem("background-option", "true");
    } else {
      Background = false;

      clearInterval(BackgroundInterval);
      localStorage.setItem("background-option", "false");
    }
  });
});
