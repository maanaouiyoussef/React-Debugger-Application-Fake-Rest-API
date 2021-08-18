import React from 'react'
import Button from './Button'

const Header = ({appTitle, onAdd,show}) => {


    const toggleBtnData = (show) => {
        if(show) {
            return {
                text: 'Close', 
                bg: 'red'
            }
        } else {
            return {
                text: 'Add', 
                bg: 'green'
            }
        }
    }

    const {text,bg} = toggleBtnData(show)

    return (
        <div className="header">
            <h1>{appTitle}</h1>
            <Button text={text} bg={bg} onAdd={onAdd} />
        </div>
    )
}

export default Header
