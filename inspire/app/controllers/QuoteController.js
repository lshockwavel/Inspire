import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";


export class QuoteController {
    constructor() {
        console.log('This is the Quote Controller');

        AppState.on('user', this.loadQuote.bind(this)); // Listen for user state changes
        AppState.on('quote', this.drawQuote.bind(this)); // Listen for quote state changes
    }

    async loadQuote() {
        console.log("Calling loadQuote in QuoteController");
        try {
            await quoteService.getQuote();
        } catch (error) {
            console.error("Error fetching quote:", error);
            throw error;
        }
    }

    drawQuote() {
        const quote = AppState.quote;
        let quoteHtml = '';
        quoteHtml += quote.quoteTemplate;
        document.getElementById('quote').innerHTML = quoteHtml;
    }
}