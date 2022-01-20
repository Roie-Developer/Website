"use strict";
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const toggleProjectButton = document.getElementsByClassName(
    "toggle-project-button"
)[0];
const quoteButton = document.getElementById("quote-game");
const navbarProjectLinks = document.getElementsByClassName(
    "navbar-project-links"
)[0];
const assemblyProject = document.querySelector(".assembly-project");
const downloadCalculator = document.querySelector(".java-project-download");

//Menu bar

toggleButton.addEventListener("click", (e) => {
    if (navbarProjectLinks.classList.contains("active")) {
        navbarProjectLinks.classList.toggle("active");
    }
    navbarLinks.classList.toggle("active");
});

//Projects bar links

toggleProjectButton.addEventListener("click", (e) => {
    if (navbarLinks.classList.contains("active")) {
        navbarLinks.classList.toggle("active");
    }
    navbarProjectLinks.classList.toggle("active");
});

//Adding button listeners

quoteButton.addEventListener("click", () => {
    location.href = "https://roie-developer.github.io/Quote-Generator/";
});

assemblyProject.addEventListener("click", () => {
    location.href = "https://github.com/Roie-Developer/C-Assembly-Project";
});

downloadCalculator.addEventListener("click", () => {
    location.href =
        "https://github.com/Roie-Developer/Java_Programs/raw/master/RunableCalculator.jar";
});