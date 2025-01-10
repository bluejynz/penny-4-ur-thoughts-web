import { api } from "../api";
import { CreateThoughtDTO } from "../models/dto/CreateThoughtDTO";

const getAllThoughts = async () => {
    return await api.get("/thoughts");
};

const createThought = async (body: CreateThoughtDTO) => {
    try {
        return await api.post("/thought", body);
    } catch (error) {
        console.error(error);
    }
};

const deleteThought = async (id: string) => {
    try {
        return await api.delete(`/thought/id/${id}`);
    } catch (error) {
        console.error(error);
    }
};

export { getAllThoughts, createThought, deleteThought };
