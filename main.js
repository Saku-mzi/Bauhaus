const movingThing = document.querySelector(".movingThing");

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
