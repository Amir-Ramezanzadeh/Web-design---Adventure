// tarif kardane menu icon,close icon va nav-bar
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const menuBar = document.querySelector(".nav-bar");

// tarif kardane function baraye moghe ie ke roye menu icon click mishe
menuIcon.addEventListener("click", function() {
  menuIcon.style.display = "none";
  menuBar.style.display = "block";
});

// tarif kardane function baraye moghe ie ke roye close icon click mishe
closeIcon.addEventListener("click", function() {
  menuBar.style.display = "none";
  menuIcon.style.display = "block";
});
