const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let first_picked = "";
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (first_picked === "") {
    first_picked = event.target.className;
    event.target.style.backgroundColor = event.target.className;
    event.target.id = "picked";
  }
  else if (event.target.className === first_picked && event.target.id !== "picked") {
    first_picked = "";
    event.target.style.backgroundColor = event.target.className;
    document.getElementById("picked").removeAttribute("id");
  }
  else if (event.target.className !== first_picked) {
    first_picked = "";
    event.target.style.backgroundColor = event.target.className;
    setTimeout(function() {
      event.target.style.backgroundColor = "white";
      document.getElementById("picked").style.backgroundColor = "white";
      document.getElementById("picked").removeAttribute("id");
    }, 1000)
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
