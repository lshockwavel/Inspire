

export class Image{
    constructor(data) {
        this.id = data.id;
        this.url = data.url || data.data.imgUrls.full;
        this.attribution = data.attribution || data.data.imgUrls.attribution; //?? don't think I need anything else?
    }


    //?? need to fill in the template for Get ID for it.
}