const button = document.getElementById("dark");
let isDark = false;
 button.onclick = function () {

    if (isDark === false) {
        isDark = true;

        button.textContent = "Світла тема";
        button.style.backgroundColor = "white";
        button.style.color = "black";

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        fontbutton1.style.backgroundColor = "white";
        fontbutton1.style.color = "black";

        fontbutton2.style.backgroundColor = "white";
        fontbutton2.style.color = "black";

    } else {
        isDark = false;

        button.textContent = "Темна тема";
        button.style.backgroundColor = "black";
        button.style.color = "white";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        fontbutton1.style.backgroundColor = "black";
        fontbutton1.style.color = "white";

        fontbutton2.style.backgroundColor = "black";
        fontbutton2.style.color = "white";
    }

};


const fontbutton1 = document.getElementById("font-size-button-plus");

let fontSize = 16;

fontbutton1.onclick = function () {
    fontSize  += 2;
    document.body.style.fontSize = fontSize + "px";
}
const fontbutton2 = document.getElementById("font-size-button-");
fontbutton2.onclick = function () {
    fontSize  -= 2;
    document.body.style.fontSize = fontSize + "px";
}

