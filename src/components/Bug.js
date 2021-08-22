import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { Badge } from './Badge'

const Bug = ({bug, onDelete,onToggle,back}) => {
    
    const getColors = (back) => {
        if(back) {
            return {
                color: 'white',
                bg: 'black'
            }
        } else {
            return {
                color: 'black',
                bg: 'white'
            }
        }
    }


    const {color,bg} = getColors(back)
    
    
    return (
        <div style={{backgroundColor:bg,color}} className={bug.reminder? 'bug reminder': 'bug'} onDoubleClick={() => onToggle(bug.id)}>
            <h3>{bug.problem}</h3>
            <p className="solution">{bug.solution}</p>
            <FaTimes className="fatimes" onClick={() => onDelete(bug.id)} />
            <Badge category={bug.category} />
        </div>
    )
}

export default Bug
