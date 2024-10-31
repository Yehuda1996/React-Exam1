import React from 'react';
import { Mission, MissionStatus, MissionPriority } from '../../types';
import './InputForm.css';

interface InputFormProps {
    mission: Mission;
    setMission: React.Dispatch<React.SetStateAction<Mission>>;
    handleAddMission: (e: React.FormEvent) => void;
}

const InputForm: React.FC<InputFormProps> = ({ mission, setMission, handleAddMission }) => {
    return (
        <form className='input' onSubmit={handleAddMission}>
            <input
                type="text"
                placeholder='Name'
                value={mission.name}
                onChange={(e) => setMission(prev => ({ ...prev, name: e.target.value }))}
            />
            <select
                value={mission.status}
                onChange={(e) => setMission(prev => ({ ...prev, status: e.target.value as MissionStatus }))}
            >
                <option value={MissionStatus.pending}>{MissionStatus.pending}</option>
                <option value={MissionStatus.inProgress}>{MissionStatus.inProgress}</option>
                <option value={MissionStatus.completed}>{MissionStatus.completed}</option>
            </select>
            <select
                value={mission.priority}
                onChange={(e) => setMission(prev => ({ ...prev, priority: e.target.value as MissionPriority }))}
            >
                <option value={MissionPriority.high}>{MissionPriority.high}</option>
                <option value={MissionPriority.low}>{MissionPriority.low}</option>
            </select>
            <textarea
                placeholder='Description'
                value={mission.description}
                onChange={(e) => setMission(prev => ({ ...prev, description: e.target.value }))}
            />
            <button type="submit">Add Mission</button>
        </form>
    );
};

export default InputForm;
