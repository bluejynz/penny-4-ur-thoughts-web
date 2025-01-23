import { Login, RegisterUser } from "@/interfaces/Auth";
import { api } from "../api";

const prefix = "/auth";

const registerUser = async (body: RegisterUser) => {
    try {
        return await api.post<RegisterUser>(`${prefix}/register`, body);
    } catch (error) {
        console.error(error);
    }
};

const login = async (body: Login) => {
    try {
        return await api.post<RegisterUser>(`${prefix}/login`, body);
    } catch (error) {
        console.error(error);
    }
};

export { registerUser, login };
