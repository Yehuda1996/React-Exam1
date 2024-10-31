import React from 'react'
import './MissionCard.css'
import { Mission } from '../../types'

interface MissionCardProps {
    mission: Mission
}

const MissionCard: React.FC<MissionCardProps> = ({mission}) => {
  return (
    <div>
        <span>{mission.name}</span>
        <span>{mission.status}</span>
        <span>{mission.priority}</span>
        <span>{mission.description}</span>
        <button>Delete</button>
        <button>Progress</button>
    </div>
  )
}

export default MissionCard