// Reveal elements on scroll
const hiddenElements = document.querySelectorAll(".hidden");
const header = document.querySelector("header");

const revealOnScroll = () => {
  const triggerPoint = header.getBoundingClientRect().bottom;

  hiddenElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop > triggerPoint) {
      el.classList.add("reveal");
    } else {
      el.classList.remove("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Initial check to reveal elements already in view
revealOnScroll();
