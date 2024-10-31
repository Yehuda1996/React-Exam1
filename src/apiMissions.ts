import axios from "axios";
import { Mission } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://reactexambackend.onrender.com/missions/:apikey";

export const getMissions = async (): Promise<Mission[]> => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY
            }
        });
        return response.data;
    } 
    catch (error) {
        throw new Error("fetch failed!")
    }
}

export const createMission = async (newMission: Mission) : Promise<Mission> => {
    try {
        const response = await axios.post(BASE_URL, {
            params: {
                apikey: API_KEY
            },
            newMission
        })
        return response.data
    } catch (error) {
        throw new Error("Error creating mission");
    }
}

export const updateMission = async (updateMission: Mission, id: string) : Promise<Mission> => {
    try {
        const response = await axios.post(`${BASE_URL}/${id}`, {
            params: {
                apikey: API_KEY,
                _id: id
            },
            updateMission
        })
        return response.data
    } catch (error) {
        throw new Error("Error creating mission");
    }
}

export const deleteMission = async (id: string) : Promise<void> => {
    try {
        const response = await axios.post(`${BASE_URL}/${id}`, {
            params: {
                apikey: API_KEY,
                _id: id
            },
        })
        return response.data
    } catch (error) {
        throw new Error("Error creating mission");
    }
}