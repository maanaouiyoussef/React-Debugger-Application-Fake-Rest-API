import React from 'react'

const Button = ({text, bg, onAdd}) => {
    return (
        <div>
            <button onClick={onAdd} className="btn" style={{backgroundColor: bg, color: 'white'}}>{text}</button>
        </div>
    )
}

export default Button
