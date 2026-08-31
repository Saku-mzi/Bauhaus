const movingThing = document.querySelector(".movingThing");
const main = document.querySelector("main");

const total = movingThing.children.length - 1;

let current = 0;

function nextPic() {
  current = current + 1;

  if (current > total) {
    current = 0;
  }

  const oneImage = movingThing.clientWidth;

  movingThing.scrollLeft = current * oneImage;
}

document.querySelector(".container").addEventListener("click", nextPic);

// Add class to main tag every 5 seconds
setInterval(() => {
  main.classList.toggle("active");
}, 5000);
