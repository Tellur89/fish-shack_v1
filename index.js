function classToggle() {
  const navs = document.querySelectorAll(".navbar__items");

  navs.forEach((nav) => nav.classList.toggle("navbar__ToggleShow"));
}

document
  .querySelector(".navbar__link-toggle")
  .addEventListener("click", classToggle);

window.onload = function () {
  document.querySelector("#loader").style.display = "none";
};
