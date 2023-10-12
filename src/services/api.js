import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  headers: { "x-api-key": process.env.REACT_APP_API_KEY },
});

export default api;
