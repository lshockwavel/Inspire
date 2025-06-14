

export class Quote {
    constructor(data) {
        this.quote = data.quote || '';
        this.author = data.author || 'Unknown';
        this.source = data.source || '';
    }

    
}