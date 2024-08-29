const convertTemperature = e => {
    const tempInput = document.querySelector('#temperature').value;
    const unit = document.querySelector('#unit').value;

    e.preventDefault();

    // input validation
    const temperature = parseFloat(tempInput);

    if (isNaN(temperature)) {
        alert('Please enter a valid number.');
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === 'C') {
        // celsius
        celsius = temperature;
        fahrenheit = (celsius * 9) / 5 + 32;
        kelvin = celsius + 273.15;
    } else if (unit === 'F') {
        // fahrenheit
        fahrenheit = temperature;
        celsius = ((fahrenheit - 32) * 5) / 9;
        kelvin = celsius + 273.15;
    } else if (unit === 'K') {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
    }

    setResult(celsius, fahrenheit, kelvin);
};

const setResult = (c, f, k) => {
    const celsius = document.querySelector('#celsius');
    const fahrenheit = document.querySelector('#fahrenheit');
    const kelvin = document.querySelector('#kelvin');

    celsius.innerText = `${c.toFixed(2)} °C`;
    fahrenheit.innerText = `${f.toFixed(2)} °F`;
    kelvin.innerText = `${k.toFixed(2)} K`;
};

document.querySelector('#form').addEventListener('submit', convertTemperature);
