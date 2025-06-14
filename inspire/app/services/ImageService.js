


class ImageService {

    async getImage() {
        console.log("Fetching image...");
        try {
            const response = await api.get("api/images");
            console.log("Image fetched successfully:", response.data);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }
}

export const imageService = new ImageService();