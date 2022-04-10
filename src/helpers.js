import axios from "axios";
import { useDevelopersService } from "./services/developersService";

export const init = async () => {
  const devs = useDevelopersService();
  await devs.getDevelopers();
};

export const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const postData = async (url, payload) => {
  await axios.post(url, payload);
};

export const postImage = async(url,payload) => {
    await axios({
      method: "POST",
      url: `${url}PostImage`,
      data: payload,
      config: { header: { "Content-Type": "multipart/form-data" } },
    });
}

export const putData = async (url, payload) => {
  await axios.put(url, payload);
};

export const deleteData = async (url) => {
  await axios.delete(url);
};
