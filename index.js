const mobileMenu = document.getElementById("mobileMenu");
function showMobileMenu() {
  mobileMenu.style.display = "block";
  mobileMenu.classList.remove("hidden");
}
function closeMobileMenu() {
  mobileMenu.style.display = "none";
  mobileMenu.classList.add("hidden");
}
function jumpTo(id) {
  window.location.hash = id;
  closeMobileMenu();
}
