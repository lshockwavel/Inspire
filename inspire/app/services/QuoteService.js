

class QuoteService {

    async getQuote() {
        console.log("Fetching quote...");
        try {
            const response = await api.get("api/quotes");
            console.log("Quote fetched successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching quote:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
}

export const quoteService = new QuoteService();
