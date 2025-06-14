import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Quote } from "../models/Quote.js";

class QuoteService {

    async getQuote() {
        console.log("Fetching quote...");
        try {
            const response = await api.get("api/quotes");
            console.log("Quote fetched successfully:", response.data);
            AppState.quote = new Quote(response.data);
            console.log("Quote data stored in AppState:", AppState.quote);
        } catch (error) {
            console.error("Error fetching quote:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
}

export const quoteService = new QuoteService();
