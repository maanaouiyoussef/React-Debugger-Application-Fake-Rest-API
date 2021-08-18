import React from 'react'

export const Badge = ({category}) => {
    
    function bugStyle(category) {
        if(category === 'Java') {
            return {
                bg: '#f89820 ', 
                color: 'white'
            }; 
        } else if (category === 'JavaScript') {
            return{
                bg: '#F0DB4F', 
                color: '#323330'
            } 
        } else if(category === 'PHP') {
            return {
                bg: '#8993be', 
                color: '#232531'
            };
        } else {
            return {
                bg: '#FFD43B', 
                color: '#306998'
            };
        }
    }

    const {color, bg} = bugStyle(category)

    return (
        <div className="badge" style={{ backgroundColor: bg, color }}>
            {category}
        </div>
    )
}
