// Create a class called .blur-glass but don't assign it to any element (yet).

// You will create a onClick listener here (or checked == true) to add this class dynamically
const hamburger = document.querySelector(".nav-toggle-label");
const mainContent = document.querySelector(".main");

const blurryNavBar = document.querySelector(".nav-background");

let header = document.getElementsByTagName("header");
let showBlur = false;

hamburger.addEventListener("click", addBlur);

const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

home.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".container").scrollIntoView({
    behavior: "smooth"
  });
});

about.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".about-container").scrollIntoView({
    behavior: "smooth"
  });
});

projects.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".projects-container").scrollIntoView({
    behavior: "smooth"
  });
});

contact.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".contact-container").scrollIntoView({
    behavior: "smooth"
  });
});

function addBlur() {
  if (!showBlur) {
    blurryNavBar.classList.add("blurry-background");
    mainContent.classList.add("blur-glass");

    header[0].classList.remove("unblur-glass");
    mainContent.classList.remove("unblur-glass");

    // hamburger.classList.add("nav-rotate");
    showBlur = true;
  } else {
    blurryNavBar.classList.remove("blurry-background");
    mainContent.classList.remove("blur-glass");

    header[0].classList.add("unblur-glass");
    mainContent.classList.add("unblur-glass");
    showBlur = false;
  }
}

// This code-block allows us to hide navbar onScroll.
// Equivalent to JQuery's $(document).ready()
document.addEventListener("DOMContentLoaded", event => {
  let prevScrollTop = 0;
  let currentScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.onscroll = () => {
    let spaceAbove = window.pageYOffset;
    let navHeight = navbar.style.height;

    currentScrollTop = spaceAbove;

    if (prevScrollTop < currentScrollTop && spaceAbove > navHeight * 2) {
      navbar.classList.add("hide-nav");
    } else if (prevScrollTop > currentScrollTop && !(spaceAbove <= navHeight)) {
      navbar.classList.remove("hide-nav");
    }

    prevScrollTop = currentScrollTop;
  };
});
