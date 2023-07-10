let celciusInput = document.querySelector("#celcius > input");
let fahrenheitInput = document.querySelector("#fahrenheit > input");

let tempConvert = document.querySelector(".buttonContainer > #change");
tempConvert.addEventListener("click", changeTemperature);

function CelsiusConvert(cel) {
  const fah = cel * (9 / 5) + 32;
  const kel = cel + 273.15;
  fahrenheitInput.value = fah.toFixed(2);
  kelvinInput.value = kel.toFixed(2);
}
function FahrenheitConvert(fah) {
  const cel = (fah - 32) * (5 / 9);
  const kel = (fah + 459.67) * (5 / 9);
  celciusInput.value = cel.toFixed(2);
  kelvinInput.value = kel.toFixed(2);
}

function changeTemperature() {
  const cel = parseFloat(celciusInput.value);
  const fah = parseFloat(fahrenheitInput.value);

  if (!isNaN(cel)) {
    CelsiusConvert(cel);
  } else if (!isNaN(fah)) {
    FahrenheitConvert(fah);
  } else {
    alert("Input is Empty");
  }
}

let btn = document.querySelector(".buttonContainer > #clear");
btn.addEventListener("click", clearData);
function clearData() {
  celciusInput.value = "";
  fahrenheitInput.value = "";
}
