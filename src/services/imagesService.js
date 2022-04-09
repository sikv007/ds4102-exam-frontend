import axios from "axios";
import { HOST } from "../config";

const postImage = async (image) => {
  await axios({
    method: "POST",
    url: `${HOST}src/img/developers`,
    data: image,
    config: { header: { "Content-Type": "multipart/form-data" } },
  });
};

export const useImagesService = () => {
  return {
    postImage,
  };
};
