import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { setHTML } from "../utils/Writer.js";


export class WeatherController {
    constructor() {
        console.log('This is the Weather Controller');

        AppState.on('user', this.getWeather);
        AppState.on('weather', this.drawWeather.bind(this)); // Listen for weather state changes
    }

    async getWeather() {
        console.log("Calling getWeather in WeatherController");
        try {
            await weatherService.getWeather();
        } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
        }
    }

    drawWeather() {
        const weather = AppState.weather;
        let weatherHtml = '';
        weatherHtml += weather.weatherTemplate;
        setHTML('weather', weatherHtml);
    }

    toggleTemperature(event) {
        event.preventDefault();
        console.log("Toggling temperature in WeatherController");
        // Call the service to toggle temperature display
        weatherService.toggleTemperature();
        // Redraw the weather after toggling
        this.drawWeather();

    }

}