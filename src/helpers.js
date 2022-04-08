import axios from "axios";
import { useDevelopersService } from "./services/developersService";

export const init = () => {
  const devs = useDevelopersService();
  devs.fetchDevelopers();
};

export const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const postData = async (url, payload) => {
  await axios.get(url, payload);
};

export const putData = async (url, payload) => {
  await axios.get(url, payload);
};
