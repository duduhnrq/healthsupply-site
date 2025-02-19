document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  function checkScreenSize() {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      menu.style.display = "flex"; 
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
      menu.style.transform = "none";
    } else {
      menu.style.display = "";
      menu.style.opacity = "";
      menu.style.visibility = "";
      menu.style.transform = "";
    }
  }

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});