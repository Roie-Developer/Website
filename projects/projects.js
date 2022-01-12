"use strict";
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const toggleProjectButton = document.getElementsByClassName(
    "toggle-project-button"
)[0];
const navbarProjectLinks = document.getElementsByClassName(
    "navbar-project-links"
)[0];

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