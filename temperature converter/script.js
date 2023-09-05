document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', () => {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue)) {
            const convertedFahrenheit = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = convertedFahrenheit.toFixed(2);
        }

        if (!isNaN(fahrenheitValue)) {
            const convertedCelsius = (fahrenheitValue - 32) * 5/9;
            celsiusInput.value = convertedCelsius.toFixed(2);
        }
    });
});
