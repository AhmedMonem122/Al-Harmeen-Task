import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_AL_HARMEEN_API_BASE_URL,
});
