let landingPage = document.querySelector(".landing-page");
let SettingBox = document.querySelector(".settings-box");
let OpenSetting = document.querySelector(".setting");
let Gear = document.querySelector(".fa-gear");
let ColorLi = document.querySelectorAll(".colors-list li");

let MainColor = localStorage.getItem("Color-List");

// open And Close List Links By Toggel Menu
// ToggelMenu.addEventListener("click", function (e) {
//   if (e.target === ToggelMenu) {

//   }
// });

// Close List Links By click AnyWay
// document.addEventListener("click", (e) => {
//   if (e.target !== ToggelMenu) {
//     if (ListLinks.classList.contains("show")) {
//       ListLinks.classList.remove("show");
//     }
//   }
// });

let toggle = document.getElementById("toggle");
let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let ListLinks = document.querySelector(".links");
let logo = document.querySelector(".logo");

bars.addEventListener("click", () => {
  bars.classList.remove("rotate");
  xmark.classList.add("rotate");
  ListLinks.classList.add("show");
});
xmark.addEventListener("click", () => {
  xmark.classList.remove("rotate");
  bars.classList.add("rotate");
  ListLinks.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (
    e.target != xmark &&
    e.target != bars &&
    e.target != ListLinks &&
    e.target != logo
  ) {
    xmark.classList.remove("rotate");
    bars.classList.add("rotate");
    ListLinks.classList.remove("show");
  }
});

// Open Setting By Gear
OpenSetting.addEventListener("click", function () {
  Gear.classList.toggle("fa-spin");
  SettingBox.classList.toggle("show");
});

// Close Setting By click AnyWay
document.addEventListener("click", (e) => {
  e.stopPropagation;
  if (e.target !== Gear && e.target !== SettingBox) {
    SettingBox.classList.remove("show");
    Gear.classList.remove("fa-spin");
  }
});

// Check For Color In LocalStorage
if (MainColor !== null) {
  document.documentElement.style.setProperty("--main-color", MainColor);

  //  Check And Remove Class Active From Li
  ColorLi.forEach((e) => {
    e.classList.remove("active");

    // Check And  Add Class Active For Li
    if (e.dataset.color === MainColor) {
      e.classList.add("active");
    }
  });
}

// Change MainColor For Page
ColorLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    // Catch Li By Click
    let NewColor = e.target.dataset.color;
    // let LiElement = e.target;
    li.classList.add("active");
    document.documentElement.style.setProperty("--main-color", NewColor);

    // Set Color In LocalStorage
    localStorage.setItem("Color-List", NewColor);

    handelActive(e);
  });
});

// Chande Class Left To Right From Window Resize
let TimeLineCard = document.getElementById("TimelineCard");
window.onload = function () {
  if (window.innerWidth <= 550) {
    TimeLineCard.classList.remove("left");
    TimeLineCard.classList.add("right");
  } else {
    TimeLineCard.classList.remove("right");
    TimeLineCard.classList.add("left");
  }
};

// bg Automatic
window.onscroll = function () {
  Skills();
  Cards(AllLineCard);
  ImgCards(AllImgCard);
  Up();
  // Start Scroll Up
  this.scrollY >= 2500 ? up.classList.add("show") : up.classList.remove("show");
};

// Scroll To Section Skill
let OurSkills = document.querySelector(".skills");
function Skills() {
  let SkillsOffSetTop = OurSkills.offsetTop;
  let SkillsOuterHeight = OurSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > SkillsOffSetTop + SkillsOuterHeight - windowHeight) {
    let AllSkills_Span = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    );

    AllSkills_Span.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
}

// Create Gallery
let OurGallery = document.querySelectorAll(".gallery .images-box img");
OurGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let Overlay = document.createElement("div");
    Overlay.className = "popup-overlay";
    document.body.appendChild(Overlay);

    let PopupBox = document.createElement("div");
    PopupBox.className = "popup-box";

    let CLosePop = document.createElement("i");
    CLosePop.className = "fa-solid fa-xmark";
    PopupBox.appendChild(CLosePop);

    if (img.alt !== null) {
      let ImgHead = document.createElement("h3");
      ImgHead = document.createTextNode(img.alt);
      PopupBox.appendChild(ImgHead);
    }

    let popupImage = document.createElement("img");
    popupImage.src = img.src;

    PopupBox.appendChild(popupImage);
    document.body.appendChild(PopupBox);
  });
});

// ClosePopup
document.addEventListener("click", function (e) {
  if (e.target.className == "fa-solid fa-xmark") {
    e.target.parentElement.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// The Arrive To Setion By Bullets
let Allbullets = document.querySelectorAll(".nav-bullets .bullet");
let AllLinks = document.querySelectorAll(".links li a");
function scrollSection(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      ListLinks.classList.toggle("show");

      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollSection(Allbullets);
scrollSection(AllLinks);

//  Remove Class Active From Span
function handelActive(element) {
  element.target.parentElement.querySelectorAll(".active").forEach((span) => {
    span.classList.remove("active");
  });

  //  Add Class Active For Span
  element.target.classList.add("active");
}

// Bullets
let ResetBtn = document.querySelector(".btn-restart");
ResetBtn.onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// Show TimeLineCard By ScrollY
let AllLineCard = document.querySelectorAll(".LineCard");
function Cards(elements) {
  elements.forEach((e) => {
    if (window.scrollY - 1600 >= e.offsetTop) {
      e.classList.remove("show");
    } else {
      e.classList.add("show");
    }
  });
}

// Show ImgGallery By ScrollY
let AllImgCard = document.querySelectorAll(".gallery #ImgCard");
function ImgCards(elements) {
  elements.forEach((e) => {
    if (window.scrollY + 500 >= e.offsetTop) {
      e.classList.remove("show");
    } else {
      e.classList.add("show");
    }
  });
}

// Start Click Up
let up = document.getElementById("up");

function Up() {
  up.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
