// Hamburger menu toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.onclick = () => {
  navLinks.classList.toggle("active");
};

// Typing effect
const texts = ["Frontend Developer.", "MERN Stack Developer.", "IOT Developer."];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    // Wait before deleting
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    // Move to next text
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

window.onload = typeEffect;

window.addEventListener("load", () => {
    const fills = document.querySelectorAll(".skill-bar-fill");
    fills.forEach(fill => {
      const percent = fill.getAttribute("data-percent");
      fill.style.width = percent + "%";
    });
  });

// Read More functionality
const readMoreBtn = document.getElementById("read-more-btn");
const fullAboutText = document.getElementById("full-about-text");

readMoreBtn.addEventListener("click", () => {
  if (fullAboutText.style.display === "none") {
    fullAboutText.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    fullAboutText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});
  