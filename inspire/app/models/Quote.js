

export class Quote {
    constructor(data) {
        this.quote = data.quote || '';
        this.author = data.author || 'Unknown';
        this.source = data.source || '';
    }
    
    get quoteTemplate() {
        return /*html */ `
            <p class="mt-3 text-light" title="Source: ${this.source}" ><span class = "fw-bold">"${this.quote}"</span> - ${this.author}</p>
        `;
    }

    //?? Clean up when done
    get quoteTemplateTest() {
        return /*html */ `
            <div class="quote">
                <p>"${this.quote}"</p>
                <p class="author">- ${this.author}</p>
                ${this.source ? `<p class="source">Source: ${this.source}</p>` : ''}
            </div>
        `;
    }
}