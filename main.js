const move = document.querySelector(".movingThing");

const total = move.children.length - 1;

let current = 0;

function nextImage() {
  current = current + 1;

  if (current > total) {
    current = 0;
  }

  const oneImage = move.clientWidth;

  move.scrollLeft = current * oneImage;
}

document.querySelector(".container").addEventListener("click", nextImage);
