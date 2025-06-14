import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";


export class ImageController {
    constructor() {
        console.log('This is the Image Controller');

        AppState.on('user', this.loadImage.bind(this)); //?? Use for later when more things are set up
        AppState.on('image', this.drawImage.bind(this)); // Listen for image state changes
    }
    
   async loadImage() {
        console.log("Calling loadImage in ImageController");
        try {
            await imageService.getImage();
        } catch (error) {
            console.error("Error fetching image:", error);
            throw error;
        }
    }

    drawImage() {
        const image = AppState.image;
        // let imageHtml = '';
        // imageHtml += image.imageTemplate;
        document.getElementById('image').innerText = image.attribution;
        document.body.style.backgroundImage = `url(${image.url})`;
    }
}