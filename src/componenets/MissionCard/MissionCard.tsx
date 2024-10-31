import React from 'react'
import './MissionCard.css'
import { Mission } from '../../types'

interface MissionCardProps {
    mission: Mission
    handleDelete: (id: string) => void
}

const MissionCard: React.FC<MissionCardProps> = ({mission, handleDelete}) => {
  return (
    <div className='missionCard'>
        <span>{mission.name}</span>
        <span>{mission.status}</span>
        <span>{mission.priority}</span>
        <span>{mission.description}</span>
        <button onClick={() => (handleDelete(mission._id))}>Delete</button>
        <button>Progress</button>
    </div>
  )
}

export default MissionCard