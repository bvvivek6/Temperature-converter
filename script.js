const inputTemp = document.getElementById("textBox");
const outputTemp = document.getElementById("output");
const celtofeh = document.getElementById("celsius");
const fehtocel = document.getElementById("Fahrenheit");

function convertTemp() {
    //event.preventDefault();
    let temp = Number(inputTemp.value); // Convert input value to a number
    if (celtofeh.checked && inputTemp.value ) {
        temp = temp * 9/5 + 32;
        outputTemp.textContent = temp.toFixed(2) +"°F"; // Display result with 2 decimal places
    } else if (fehtocel.checked && inputTemp.value) {
        temp = (temp - 32) * 5/9;
        outputTemp.textContent = temp.toFixed(2)+"°C"; // Display result with 2 decimal places
    } else {
        alert("Select a option or Check whether you have entered the temperature");
    }
}

//Reset the temperature to the default
function reset(){
    inputTemp.value = "";
    outputTemp.textContent = "Your answer will appear here";
    celtofeh.checked = false;
    fehtocel.checked = false;
}
