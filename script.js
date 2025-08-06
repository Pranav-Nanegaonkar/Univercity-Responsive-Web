const nav_links = document.querySelector(".nav-links");
console.dir(nav_links);
function closeMenu() {
  nav_links.style.right = "-200px";
  setTimeout(() => {
    nav_links.style.display = "none";
  }, 500);
}

function openMenu() {
  nav_links.style.display = "initial";
  setTimeout(() => {
    nav_links.style.right = "0";
  }, 100);
}
