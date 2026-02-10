// NAVBAR COLOR CHANGE ON SCROLL
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// SMOOTH SCROLL FOR NAVIGATION LINKS
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// HERO BUTTON SCROLL (Explore More → About section)
const heroButton = document.querySelector(".hero-btn");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });
}


// ACTIVE MENU HIGHLIGHT ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
