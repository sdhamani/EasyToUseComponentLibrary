var btnTScrollUp = document.querySelector("#floating-button-lib");

var btnScrollInstallation = document.querySelector("#installation");
4;
var btnScrollAvatar = document.querySelector("#avatars");
4;

var btnScrollAlerts = document.querySelector("#alerts");
4;
var btnScrollBadges = document.querySelector("#badges");
4;
var btnScrollButtons = document.querySelector("#buttons");
4;
var btnScrollcards = document.querySelector("#cards");
4;
var btnScrollImages = document.querySelector("#images");
4;

var btnScrollInputs = document.querySelector("#inputs");
4;

var btnMenuMobileView = document.querySelector("#menu");
4;

const screenWidth = screen.width;

btnTScrollUp.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

btnScrollInstallation.addEventListener("click", function () 
  if (screenWidth < 767) {
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
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
    var menuitem = document.getElementById("menu");
    menuitem.style.display = "none";
    myFunctiontoggle();
  }
  window.scroll({
    top: 9200,
    left: 0,
    behavior: "smooth",
  });
});

var hamflag = false;

function myFunction(x) {
  console.log("ham", hamflag);
  var menuitem = document.getElementById("menu");
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
