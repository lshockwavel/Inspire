

export class Image{
    constructor(data) {
        this.id = data.id;
        this.url = data.url || data.imgUrls.full; // REVIEW I would have figured it would be data.data.imgUrls.full
        this.attribution = data.attribution || data.imgUrls.attribution; // REVIEW I would have figured it would be data.data.imgUrls.attribution
    }


    //?? need to fill in the template for Get ID for it.
}