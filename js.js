let color = "black";
let click = true; // Allowing drawing on canva
function canvaGenerator(size){
    let canva = document.querySelector('.canva');
    let square = canva.querySelectorAll('div');
    square.forEach((div) => div.remove());
    canva.style.gridTemplateColumns =  `repeat(${size}, 1fr)`; //Generates 16 columns and each columns will have a width of 1/16 of the width of the container 
    canva.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        canva.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input){
    if (input >= 2 && input <= 100) {  // validating the canva limit grid size
        document.querySelector(".error").style.display = "none";
        canvaGenerator(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

function colorSquare () {  // Function which allow us to manage the drawing color on canva

    if (click){
        if ((color === 'rainbow')){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }

}

function changeColor(choice) {  // Setting the active colors displayed on canva
    color = choice;
}

function resetCanva (){
    let canva = document.querySelector('.canva');
    let square = canva.querySelectorAll('div');
    square.forEach((div) => div.style.backgroundColor = 'white');

}

// Function that manage on canva drawing functionality, disable/enable 

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
      } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
      }
    }
  });