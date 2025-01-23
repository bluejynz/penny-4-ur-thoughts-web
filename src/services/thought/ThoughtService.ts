import { Thought } from "@/interfaces/Thought";
import { api } from "../api";
import { CreateThoughtDTO } from "../models/dto/CreateThoughtDTO";
import { UpdateThoughtDTO } from "../models/dto/UpdateThoughtDTO";

const prefix = "/thought"

const getAllThoughts = async () => {
    return await api.get(prefix);
};

const createThought = async (body: CreateThoughtDTO) => {
    try {
        return await api.post<Thought>(prefix, body);
    } catch (error) {
        console.error(error);
    }
};

const updateThought = async ({ id, saying }: UpdateThoughtDTO) => {
    try {
        return await api.patch(`${prefix}/id/${id}`, { saying: saying });
    } catch (error) {
        console.error(error);
    }
};

const deleteThought = async (id: string) => {
    try {
        return await api.delete(`${prefix}/id/${id}`);
    } catch (error) {
        console.error(error);
    }
};

export { getAllThoughts, createThought, updateThought, deleteThought };
