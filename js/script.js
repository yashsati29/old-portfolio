// DevS (Yash Kumar Sati) Portfolio Website v1.0r [FINAL] - UDACITY FEND PROJECT - 05/06/2018 - 22:22

// OFF CANVAS USER-SCRIPT
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '140px';
  document.getElementById('main').style.marginLeft = '140px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

// PRELOADER USER-SCRIPT
if (screen.width >= 1000) {
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loaderText").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
} else {
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 0);
  }

  function showPage() {
    document.getElementById("loaderText").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
}
