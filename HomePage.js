let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

//nav active problem for mobile device
function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  navigation.classList.remove("active");
  main.classList.remove("active");
}
