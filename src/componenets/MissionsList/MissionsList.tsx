import React from 'react'
import { Mission } from '../../types'
import MissionCard from '../MissionCard/MissionCard'
import './MissionsList.css'

interface MissionsListProps {
    missions: Mission[],
    handleDelete: (id:string) => void
    handleStatusUpdate: (id: string) => void
}

const MissionsList: React.FC<MissionsListProps> = ({missions, handleDelete, handleStatusUpdate}) => {
  return (
    <div className='missionsList'>
        <h3>Missions</h3>
        {missions.map((mission: Mission) => {
            return <MissionCard mission={mission} key={mission._id} handleDelete={handleDelete}
            handleStatusUpdate={handleStatusUpdate}/>
        })}
    </div>
  )
}

export default MissionsList