let fahrenheitinp = document.querySelector("#fahrenheit > input");
let celciuesinp = document.querySelector("#celciues > input");
let kelvininp = document.querySelector("#kelvin > input");

const allClear = document.getElementById("all-clear");

function round(number) {
  return Math.round(number * 100) / 100;
}

celciuesinp.addEventListener("input", () => {
  let cTemp = parseFloat(celciuesinp.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;
  fahrenheitinp.value = round(fTemp);
  kelvininp.value = round(kTemp);
});

fahrenheitinp.addEventListener("input", () => {
  let fTemp = parseFloat(fahrenheitinp.value);
  let cTemp = fTemp - 32 + 5 / 9;
  let kTemp = fTemp - 32 + 5 / 9 + 273.15;
  celciuesinp.value = round(cTemp);
  kelvininp.value = round(kTemp);
});

kelvininp.addEventListener("input", () => {
  let kTemp = parseFloat(kelvininp.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
  celciuesinp.value = round(cTemp);
  fahrenheitinp.value = round(fTemp);
});

allClear.addEventListener("click", () => {
  celciuesinp.value = "";
  fahrenheitinp.value = "";
  kelvininp.value = "";
});
