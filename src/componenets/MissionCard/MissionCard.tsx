import React, {useRef, useEffect} from 'react'
import './MissionCard.css'
import { Mission } from '../../types'

interface MissionCardProps {
    mission: Mission
    handleDelete: (id: string) => void, 
    handleStatusUpdate: (id: string) => void
}

const MissionCard: React.FC<MissionCardProps> = ({mission, handleDelete, handleStatusUpdate}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            switch (mission.status) {
                case "Pending":
                    cardRef.current.style.backgroundColor = "#f00e0efc"; 
                    break;
                case "In Progress":
                    cardRef.current.style.backgroundColor = "#f0893afd"; 
                    break;
                case "Completed":
                    cardRef.current.style.backgroundColor = "#24e124"; 
                    break;
                default:
                    cardRef.current.style.backgroundColor = ""; 
                    break;
            }
        }
    }, [mission.status]);

  return (
    <div ref={cardRef} className="missionCard">
        <span>{mission.name}</span>
        <span>{mission.status}</span>
        <span>{mission.priority}</span>
        <span>{mission.description}</span>
        <button onClick={() => (handleDelete(mission._id))}>Delete</button>
        <button onClick={() => handleStatusUpdate(mission._id)}>Progress</button>
    </div>
  )
}

export default MissionCard