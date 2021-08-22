import React from 'react'
import { useState } from 'react'

const AddBug = ({ onInsert, back}) => {

    // Pass to the state objects 
    // The object handles the input values and send it to the inputs again
    const [problem, setProb] = useState('')
    const [solution, setSolution] = useState('')
    const [reminder, setReminder] = useState(false)
    const [category, setCategory] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (problem === '' || solution === '' || category === 'Choose option') {
            alert('Some Field is empty ')
            return;
        }

        onInsert({ problem, solution, category, reminder })

        clearStates()
    }

    const clearStates = () => {
        setProb('')
        setSolution('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Error</label>
                <input type="text" onChange={(e) => setProb(e.target.value)} value={problem} />
            </div>
            <div className="form-control">
                <label htmlFor="">Solution</label>
                <input type="text" value={solution} onChange={(e) => setSolution(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Category</label>
                <select onChange={(e) => setCategory(e.target[e.target.selectedIndex].text)}>
                    <option value="NO">Choose option</option>
                    <option value="java">Java</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                </select>
            </div>
            <div className="form-control-check">
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />  <span htmlFor="">Solved</span>
            </div>

            <input type="submit" value="Submit" className={back ? 'btn btn-light btn-block': 'btn btn-dark btn-block'} />
        </form>
    )
}

export default AddBug
