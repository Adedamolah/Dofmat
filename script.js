// Flavour switching
const flavours = [
  { name: "Watermelon", bg: "green", text: "white" },
  { name: "Orange", bg: "orange", text: "white" },
  { name: "Pineapple", bg: "gold", text: "black" }
];

let current = 0;
const flavourName = document.getElementById("flavourName");
const hero = document.getElementById("hero");

function updateFlavour() {
  const flavour = flavours[current];
  flavourName.textContent = flavour.name;
  hero.style.background = flavour.bg;
  flavourName.style.color = flavour.text;
}

document.getElementById("prevFlavour").addEventListener("click", () => {
  current = (current - 1 + flavours.length) % flavours.length;
  updateFlavour();
});

document.getElementById("nextFlavour").addEventListener("click", () => {
  current = (current + 1) % flavours.length;
  updateFlavour();
});

updateFlavour(); // initial load

// Reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
