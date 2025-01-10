import { Thought } from "@/interfaces/Thought";
import { api } from "../api";
import { CreateThoughtDTO } from "../models/dto/CreateThoughtDTO";
import { UpdateThoughtDTO } from "../models/dto/UpdateThoughtDTO";

const getAllThoughts = async () => {
    return await api.get("/thoughts");
};

const createThought = async (body: CreateThoughtDTO) => {
    try {
        return await api.post<Thought>("/thought", body);
    } catch (error) {
        console.error(error);
    }
};

const updateThought = async ({ id, saying }: UpdateThoughtDTO) => {
    try {
        return await api.patch(`/thought/id/${id}`, { saying: saying });
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

export { getAllThoughts, createThought, updateThought, deleteThought };
