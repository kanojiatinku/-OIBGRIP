

function convertTemperature() {
  const tempInput = document.getElementById('temp');
  const unitSelect = document.getElementById('unit');
  const resultDiv = document.getElementById('result');

  const temp = parseFloat(tempInput.value);

  if (isNaN(temp)) {
    resultDiv.innerHTML = 'Invalid input';
    return;
  }

  const unit = unitSelect.value;

  let convertedTemp;
  let convertedUnit;

  switch (unit) {
    case 'Celsius':
      convertedTemp = (temp - 32) * 5 / 9;
      convertedUnit = 'Celsius';
      break;
    case 'Fahrenheit':
      convertedTemp = temp * 9 / 5 + 32;
      convertedUnit = 'Fahrenheit';
      break;
    case 'Kelvin':
      convertedTemp = temp + 273.15;
      convertedUnit = 'Kelvin';
      break;
    default:
      resultDiv.innerHTML = 'Invalid unit';
      return;
  }

  resultDiv.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
}
