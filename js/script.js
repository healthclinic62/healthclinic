function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var result = document.getElementById('bmiResult');

    if (weight > 0 && height > 0) {
        var finalBmi = weight / ((height / 100) * (height / 100));
        var category = "";

        if (finalBmi < 18.5) {
            category = "Underweight";
        } else if (finalBmi >= 18.5 && finalBmi <= 24.9) {
            category = "Normal weight";
        } else if (finalBmi >= 25 && finalBmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        result.innerHTML = "Your BMI is " + finalBmi.toFixed(2) + " which is considered " + category + ".";
    } else {
        result.textContent = "Please enter valid numbers.";
    }
}

