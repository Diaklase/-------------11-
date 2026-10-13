const car = document.getElementById("car")
let leftPosition = 0;

let box = document.getElementById("box");
let startAnimation = document.getElementById("startAnimation")

startAnimation.onclick = function (){
    box.style.animation = "move 2s";
    setTimeout(function(){
        box.style.animation = "";
    }, 2000);
}

function moveCar(){
    leftPosition += 5;
    car.style.left = leftPosition + "px"
    requestAnimationFrame(moveCar)
}

// setInterval(moveCar, 100);

requestAnimationFrame(moveCar);
