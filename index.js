let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btnEl = document.getElementById("btn");
let result = document.getElementById("result");
let span = document.getElementById("span1");

btnEl.addEventListener("click", calculate);

function calculate() {
    let heightValue = parseFloat(height.value);
    let weightValue = parseFloat(weight.value);

    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        result.value = "Invalid input";
        span.innerText = "";
        return;
    }

    let heightInMeters = heightValue / 100;
    let bmi = weightValue / (heightInMeters * heightInMeters);
    result.value = bmi.toFixed(2);

    if (bmi < 18.5) {
        span.innerText = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        span.innerText = "Normal weight";
    } else if (bmi > 24.9 && bmi <= 29) {
        span.innerText = "Overweight";
    } else {
        span.innerText = "Obesity";
    }
}
