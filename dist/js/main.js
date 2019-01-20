// New approach.
// Create a class called .blur-glass but don't assign it to any element (yet).

// You will create a onClick listener here (or checked == true) to add this class dynamically
const hamburger = document.querySelector(".nav-toggle-label");
const mainContent = document.querySelector(".main");

const blurryNavBar = document.querySelector(".nav-background");

let header = document.getElementsByTagName("header");
let showBlur = false;

hamburger.addEventListener("click", addBlur);

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
