import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"


class WeatherService {

    async getWeather() {
        console.log("Fetching weather...");
        try {
            const response = await api.get("api/Weather");
            console.log("Weather fetched successfully:", response.data);

            AppState.weather = new Weather(response.data);
            console.log("Weather data stored in AppState:", AppState.weather);

        } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
        }
    }

    toggleTemperature() {
        console.log("Toggling temperature display");
        // AppState.weather.isFahrenheit = !AppState.weather.isFahrenheit;
        AppState.isFahrenheit = !AppState.isFahrenheit; // Ensure AppState reflects the change
        // AppState.emit('weather'); // Emit an event to notify listeners of the change
        // console.log("Temperature display toggled:", AppState.isFahrenheit);
        this.saveTemperaturePreference(AppState.isFahrenheit); // Save the preference
    }

    saveTemperaturePreference(isFahrenheit) {
        console.log("Saving temperature preference:", isFahrenheit);
        localStorage.setItem('isFahrenheit', isFahrenheit); // Save the preference to localStorage
        AppState.emit('weather'); // Emit an event to notify listeners of the change
        console.log("Temperature preference saved:", AppState.isFahrenheit);
    }

    loadTemperaturePreference() {
        console.log("Loading temperature preference");
        const savedPreference = localStorage.getItem('isFahrenheit');

        // If no preference is saved, default to Fahrenheit
        if (savedPreference == null) {
            console.log("No saved temperature preference found, defaulting to Fahrenheit");
            AppState.isFahrenheit = true; // Default to Fahrenheit if no preference is saved
            this.saveTemperaturePreference(AppState.isFahrenheit); // Save the default preference
            return;
        }

        AppState.isFahrenheit = savedPreference.toLowerCase() === 'true'; // REVIEW: Is this the way to convert string to boolean?

        console.log("Temperature preference loaded:", AppState.isFahrenheit);
    }
}

export const weatherService = new WeatherService();