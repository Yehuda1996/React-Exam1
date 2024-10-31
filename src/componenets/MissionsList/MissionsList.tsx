import React from 'react'
import { Mission } from '../../types'
import MissionCard from '../MissionCard/MissionCard'
import './MissionsList.css'

interface MissionsListProps {
    missions: Mission[],
}

const MissionsList: React.FC<MissionsListProps> = ({missions}) => {
  return (
    <div className='missionsList'>
        <h3>Missions</h3>
        {missions.map((mission: Mission) => {
            return <MissionCard mission={mission}/>
        })}
    </div>
  )
}

export default MissionsList