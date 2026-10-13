const car = document.getElementById("car");
const box = document.getElementById("box");
const startAnimationBtn = document.getElementById("startAnimation");

let leftPosition = 0;
let animationId = null;
let isMoving = false;

function isValidName(name){
    return name.length > 2;
}

function isValidPassword(password){

}

function moveCar(){
    const maxRight = window.innerWidth - car.offsetWidth;

    if (leftPosition < maxRight){
        leftPosition += 5;
        car.style.left = leftPosition + "px";
        requestAnimationFrame(moveCar);
    }
    else{
        cancelAnimationFrame(animationId);
    }
}