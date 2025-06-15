import { AppState } from "../AppState.js";


export class Weather {
    constructor(data) {
        this.temp = data.main.temp;
        // this.isFahrenheit = data.isFahrenheit || true; // Default to Fahrenheit;
        this.tempC = this.temp - 273.15; // Convert Kelvin to Celsius
        this.tempF = (this.tempC * 9/5) + 32; // Convert Celsius to Fahrenheit
        this.name = data.name; //Hard coded to Boise?
    }

    get weatherTemplate() {
        return /*html*/`
        <div class="form-check form-switch ">
            <h3 class="text-center">Weather in ${this.name}:</h3>
            <div class="d-flex justify-content-center align-items-center">
                <p class="mb-0 me-2">Temperature: <span class="fst-italic">${AppState.isFahrenheit ? this.tempF.toFixed(2) + '°F' : this.tempC.toFixed(2) + '°C'}</span></p>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="tempSwitch" onchange="app.WeatherController.toggleTemperature(event)" ${AppState.isFahrenheit ? 'checked' : ''}>
                </div>
            </div>
        </div>
        `;
    }
}