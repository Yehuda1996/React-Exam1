import React, { useEffect, useState } from 'react';
import InputForm from '../InputForm/InputForm';
import './MilitaryOpsApp.css';
import { Mission, MissionStatus, MissionPriority } from '../../types';
import { createMission, deleteMission, getMissions, updateMission } from '../../apiMissions';
import MissionsList from '../MissionsList/MissionsList';

const MilitaryOpsApp: React.FC = () => {
    const [newMission, setNewMission] = useState<Mission>({
        _id: '',
        name: '',
        status: MissionStatus.pending,
        priority: MissionPriority.low,
        description: ''
    });
    const [missions, setMissions] = useState<Mission[]>([]);

    const handleAddMission = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const createdMission = await createMission(newMission);
            setMissions([...missions, createdMission]);
        } catch (error) {
            console.error("Error creating mission:", error);
        }
        setNewMission({_id: '', name: '', status: MissionStatus.pending, priority: MissionPriority.low, description: '' });
    };

    useEffect(() => {
        const loadMissions = async () => {
            try {
                const data = await getMissions();
                setMissions(data);
            } catch (error) {
                throw new Error("error loading missions")
            }
        }
        loadMissions();
    }, [])

    const handleDelete = async (id:string) => {
        try {
            await deleteMission(id);
            setMissions(prevMissions => prevMissions.filter(mission => mission._id !== id));
        } catch (error) {
            throw new Error("error")
        }
    }

    const handleStatusUpdate = async (id: string) => {
        try {
            await updateMission(id); 

            setMissions((prevMissions) =>
                prevMissions.map((mission) => {
                    if (mission._id === id) {
                        return {
                            ...mission,
                            status: 
                                mission.status === MissionStatus.pending 
                                    ? MissionStatus.inProgress 
                                    : mission.status === MissionStatus.inProgress 
                                        ? MissionStatus.completed 
                                        : MissionStatus.completed 
                        };
                    }
                    return mission;
                })
            );
        } catch (error) {
            throw new Error("Error updating mission status");
        }
    };
    

    return (
        <div className='MilitaryOpsApp'>
            <header className='header'>
                <h1>Military Operations Dashboard</h1>
                <InputForm mission={newMission} setMission={setNewMission} handleAddMission={handleAddMission} />
            </header>
            <main>
                <MissionsList missions={missions} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}/>
            </main>
        </div>
    );
};

export default MilitaryOpsApp;
