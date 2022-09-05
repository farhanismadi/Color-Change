"use strict";

const container = document.querySelector(".container");

const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const btnDanger = document.querySelector(".btn-danger");
const btnSuccess = document.querySelector(".btn-success");

btnLight.addEventListener("click", function () {
  container.classList.remove("bg-dark");
  container.classList.remove("bg-danger");
  container.classList.remove("bg-success");
  container.classList.remove("text-light");
  container.classList.remove("text-danger");
  container.classList.remove("text-success");
  container.classList.add("bg-light");
  container.classList.add("text-dark");
});

btnDark.addEventListener("click", function () {
  container.classList.remove("bg-light");
  container.classList.remove("bg-danger");
  container.classList.remove("bg-success");
  container.classList.remove("text-dark");
  container.classList.remove("text-danger");
  container.classList.remove("text-success");
  container.classList.add("bg-dark");
  container.classList.add("text-light");
});

btnDanger.addEventListener("click", function () {
  container.classList.remove("bg-dark");
  container.classList.remove("bg-light");
  container.classList.remove("bg-success");
  container.classList.remove("text-dark");
  container.classList.remove("text-danger");
  container.classList.remove("text-success");
  container.classList.add("bg-danger");
  container.classList.add("text-light");
});

btnSuccess.addEventListener("click", function () {
  container.classList.remove("bg-dark");
  container.classList.remove("bg-danger");
  container.classList.remove("bg-light");
  container.classList.remove("text-dark");
  container.classList.remove("text-danger");
  container.classList.remove("text-success");
  container.classList.add("bg-success");
  container.classList.add("text-light");
});
