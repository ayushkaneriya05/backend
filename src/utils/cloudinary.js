import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file is uploaded on cloudinary", response.url);

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

function getPublicIdFromUrl(url) {
  const parts = url.split("/");
  const filenameWithExtension = parts[parts.length - 1];
  const filename = filenameWithExtension.split(".")[0];
  return filename;
}

const deleteFromCloudinary = async (fileUrl) => {
  try {
    const publicId = getPublicIdFromUrl(fileUrl);
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deletion result:", result);
    return result;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
