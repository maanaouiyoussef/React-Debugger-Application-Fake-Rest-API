import React from 'react'
import Bug from './Bug'

const Bugs = ({ bugs,onDelete,onToggle }) => {
    return (
        <>
            {
                bugs.length>0 ?
                bugs.map((bug,index)=> (
                    <Bug key={index} bug={bug} onDelete={onDelete} onToggle={onToggle} />
                )): 
                'No Bug To show'
            }
        </>
    )
}

export default Bugs
