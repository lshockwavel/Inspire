

export class Weather {
    constructor(data) {
        this.temp = data.main.temp;
        this.isFahrenheit = data.isFahrenheit || false;
        this.tempC = this.temp - 273.15; // Convert Kelvin to Celsius
        this.tempF = (this.tempC * 9/5) + 32; // Convert Celsius to Fahrenheit
        this.name = data.name; //Hard coded to Boise?
    }

    get weatherTemplate() {
        return /*html*/`
        <div class="weather-card">
            <h3 class="text-center">Weather in ${this.name}</h3>
            <p class="text-center">Temperature: ${this.isFahrenheit ? this.tempF.toFixed(2) + '°F' : this.tempC.toFixed(2) + '°C'}</p>
            <button class="btn btn-primary" onclick="app.WeatherController.toggleTemperature()">Toggle °F/°C</button>
        </div>
        `;
    }
}