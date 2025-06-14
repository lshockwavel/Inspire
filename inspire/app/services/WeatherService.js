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
        AppState.weather.isFahrenheit = !AppState.weather.isFahrenheit;
        console.log("Temperature display toggled:", AppState.weather.isFahrenheit);
    }
}

export const weatherService = new WeatherService();