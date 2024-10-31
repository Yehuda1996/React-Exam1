import axios from "axios";
import { Mission } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = `https://reactexambackend.onrender.com/missions/${API_KEY}`;

export const getMissions = async (): Promise<Mission[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } 
    catch (error) {
        throw new Error("fetch failed!")
    }
}

export const createMission = async (newMission: Mission) : Promise<Mission> => {
    try {
        const response = await axios.post(BASE_URL,
            newMission
        )
        return response.data
    } catch (error) {
        throw new Error("Error creating mission");
    }
}

export const updateMission = async (id: string) : Promise<Mission> => {
    try {
        const response = await axios.post(`${BASE_URL}/progress/${id}`, {
            params: {
                _id: id
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Error creating mission");
    }
}

export const deleteMission = async (id: string) : Promise<void> => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            params: {
                _id: id
            },
        })
        return response.data 
    } catch (error) {
        throw new Error("Error creating mission");
    }
}