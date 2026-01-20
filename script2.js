const input = document.getElementById("tempInput");
const result = document.getElementById("result");
const button = document.getElementById("convertBtn");

button.addEventListener("click", () => {
    let value = input.value.trim();

    if (value === "" || isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "red";
        return;
    }

    value = Number(value);

    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let outputText = "";

    if (selectedUnit === "C") {
        let f = (value * 9/5) + 32;
        let k = value + 273.15;
        outputText = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (selectedUnit === "F") {
        let c = (value - 32) * 5/9;
        let k = c + 273.15;
        outputText = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (selectedUnit === "K") {
        let c = value - 273.15;
        let f = (c * 9/5) + 32;
        outputText = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.textContent = outputText;
    result.style.color = "green";
});
