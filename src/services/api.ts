import axios from "axios";

export const api = axios.create({
    // baseURL: import.meta.env.API_URL,
    // baseURL: "https://penny-4-ur-thoughts.onrender.com",
    baseURL: "http://localhost:3333",
});
