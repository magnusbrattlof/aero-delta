import axios from "axios";
import { BASE_URL } from "~constants";

export const API = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
  });
  return instance;
};
