// Get elements
const game = document.getElementById("game");
const basket = document.getElementById("basket");
const score = document.getElementById("score");

// Set up game variables
let basketX = 225;
let objectSpeed = 3;
let objectInterval = 1000;
let scoreValue = 0;

// Move basket
document.addEventListener("mousemove", (event) => {
  if (event.clientX >= 25 && event.clientX <= 475) {
    basketX = event.clientX - 25;
    basket.style.left = basketX + "px";
  }
});

// Generate objects
setInterval(() => {
  const object = document.createElement("div");
  object.classList.add("object");
  object.style.left = Math.floor(Math.random() * 450) + "px";
  game.appendChild(object);

  // Move objects
  const objectMove = setInterval(() => {
    const objectTop = parseInt(object.style.top);
    if (objectTop >= 450) {
      clearInterval(objectMove);
      game.removeChild(object);
    } else {
      object.style.top = objectTop + objectSpeed + "px";
      // Check for catch
      if (objectTop + 25 >= 450 && parseInt(object.style.left) + 25 >= basketX && parseInt(object.style.left) <= basketX + 50) {
        clearInterval(objectMove);
        game.removeChild(object);
        scoreValue++;
        score.innerHTML = "Score: " + scoreValue;
      }
    }
  }, 10);
}, objectInterval);
