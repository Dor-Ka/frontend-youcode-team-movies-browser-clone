import { BASE_IMAGE_URL } from "../constants/config";

export const getImageUrl = (imagePath, width) => `${BASE_IMAGE_URL}${width}${imagePath}`;