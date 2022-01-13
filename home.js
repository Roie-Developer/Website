"use strict";
const list = document.querySelectorAll(".list");
const twitter = document.querySelector(".twitter-button");
const instagram = document.querySelector(".instagram-button");
const facebook = document.querySelector(".facebook-button");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
    });
}

function addEventListenersToListItems() {
    list.forEach((item) => item.addEventListener("click", activeLink));
}

twitter.addEventListener("click", () => {
    location.href = "https://twitter.com/RoeiTurjeman";
});

instagram.addEventListener("click", () => {
    location.href = "https://www.instagram.com/roie_tu/";
});

facebook.addEventListener("click", () => {
    location.href = "https://www.facebook.com/roi.turgeman.12/";
});

addEventListenersToListItems();