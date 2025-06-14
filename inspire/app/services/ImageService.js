import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js"


class ImageService {

    async getImage() {
        console.log("Fetching image...");
        try {
            const response = await api.get("api/images");
            console.log("Image fetched successfully:", response.data);
            AppState.image = new Image(response.data);
            console.log("Image data stored in AppState:", AppState.image);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }
}

export const imageService = new ImageService();