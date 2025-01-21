import axios from "axios";

export const api = axios.create({
    baseURL: "https://penny-4-ur-thoughts.onrender.com",
});
