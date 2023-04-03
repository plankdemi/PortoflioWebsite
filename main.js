"use strict";

document.querySelector("section").classList.contains("hidden");

const menu = document.getElementById("menu");
const modal = document.querySelector("section");

menu.addEventListener("click", function () {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  } else{
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");

  } 
});
