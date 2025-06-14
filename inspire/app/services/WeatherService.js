

class WeatherService {

    async getWeather() {
        console.log("Fetching weather...");
        try {
            const response = await api.get("api/weather");
            console.log("Weather fetched successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
        }
    }
}