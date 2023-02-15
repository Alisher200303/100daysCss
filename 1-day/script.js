"use strict";

const searchBtn = document.querySelector(".dashboard__search-btn i"),
    searchBox = document.querySelector(".dashboard__search-box");


searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("show");
});

const dashboardFront = document.querySelector(".dashboard__front");
const menuBtn = document.querySelector(".dashboard__menu-btn");


dashboardFront.classList.add("menuShow");

menuBtn.addEventListener("click", () => {
    if (dashboardFront.classList.contains("menuHide")) {
        dashboardFront.classList.remove("menuHide");;
        dashboardFront.classList.add("menuShow");
    } else if (dashboardFront.classList.contains("menuShow")) {
        dashboardFront.classList.add("menuHide");;
        dashboardFront.classList.remove("menuShow");
    }
});