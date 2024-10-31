import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import './MilitaryOpsApp.css';
import { Mission, MissionStatus, MissionPriority } from '../../types';
import { createMission } from '../../apiMissions';

const MilitaryOpsApp: React.FC = () => {
    const [newMission, setNewMission] = useState<Mission>({
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
            setNewMission({ name: '', status: MissionStatus.pending, priority: MissionPriority.low, description: '' });
        } catch (error) {
            console.error("Error creating mission:", error);
        }
    };

    return (
        <div className='MilitaryOpsApp'>
            <header className='header'>
                <h1>Military Operations Dashboard</h1>
                <InputForm mission={newMission} setMission={setNewMission} handleAddMission={handleAddMission} />
            </header>
            <main>
                
            </main>
        </div>
    );
};

export default MilitaryOpsApp;
