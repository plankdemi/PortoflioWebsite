"use strict";

document.querySelector("section").classList.contains("hidden");

const menu = document.getElementById("menu");
const modal = document.querySelector("section");
const newestProject = document.getElementById("newestProject");
const allProjects = document.getElementById("allProjects");

menu.addEventListener("click", function () {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  } else{
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  } 
});

allProjects.addEventListener("click", function () {
  newestProject.classList.add("hidden");
  allProjects.classList.add("hidden");
});



