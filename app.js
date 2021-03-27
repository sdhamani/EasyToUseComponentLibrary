const btnTScrollUp = document.querySelector("#floating-button-lib");

const btnScrollInstallation = document.querySelector("#installation");
4;
const btnScrollAvatar = document.querySelector("#avatars");
4;

const btnScrollAlerts = document.querySelector("#alerts");
4;
const btnScrollBadges = document.querySelector("#badges");
4;
const btnScrollButtons = document.querySelector("#buttons");
4;
const btnScrollcards = document.querySelector("#cards");
4;
const btnScrollImages = document.querySelector("#images");
4;

const btnScrollInputs = document.querySelector("#inputs");
4;

const btnMenuMobileView = document.querySelector("#menu");
4;

const screenWidth = screen.width;

btnTScrollUp.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollInstallation.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollAvatar.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 490,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollAlerts.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 880,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollBadges.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 1500,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollButtons.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 2600,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollcards.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 3350,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollImages.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 7900,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollInputs.addEventListener("click", function () {
  if (screenWidth < 767) {
    let menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 9200,
    left: 0,
    behavior: "smooth",
  });
});

let hamflag = false;

function myFunction(x) {
  console.log("ham", hamflag);
  let menuitem = document.getElementById("menu");
  if (hamflag === false) {
    menuitem.style.display = "block";
  } else {
    console.log("inelse");
    menuitem.style.display = "none";
  }
  hamflag = !hamflag;
  x.classList.toggle("change");
}

function myFunctiontoggle() {
  document.getElementById("ham-container").classList.toggle("change");
  hamflag = !hamflag;
}
