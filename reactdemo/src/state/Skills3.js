import React, { useState } from 'react'

function AddSkill({ skills, addSkill }) {
    let [newSkill, setNewSkill] = useState('Java')
    let [message, setMessage] = useState("")

    function updateSkill(e) {
        setNewSkill(e.target.value)
    }

    function addNewSkill(evt) {
        evt.preventDefault()  // prevent form submission

        setMessage('')
        if (skills.includes(newSkill))
            setMessage('Duplicate Skill')
        else {
            addSkill(newSkill) // Call parent function 
        }
    }

    return (
        <div>
            <h5>Add Skills</h5>
            <form onSubmit={addNewSkill}>
                Skill <input type="text" id="txtSkill"
                    value={newSkill} onChange={updateSkill} required />
                <button>Add</button>
                &nbsp;
                <span className="text-danger">{message}</span>
            </form>
        </div>
    )
}

function ListSkills({ skills, deleteSkill }) {
    // Event handler for button
    function deleteOneSkill(idxToDelete) {
        if (window.confirm('Do you want to delete?'))
            deleteSkill(idxToDelete)  // call function in parent 
    }
    return (
        <div>
            {
                skills.length > 0 ?
                    <div>
                        <h5>Current Skills</h5>
                        <ul>
                            {
                                skills.map((skill, idx) =>
                                    <li key={idx}>
                                        {skill}
                                        &nbsp;
                                        <button onClick={() => deleteOneSkill(idx)}>Del</button>
                                    </li>)
                            }
                        </ul>
                    </div>
                    : <h5>No skills!</h5>
            }
        </div>
    )
}

export default function Skills3() {
    let [skills, setSkills] = useState([])

    function addSkill(newSkill) {
        setSkills([newSkill, ...skills])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((item, idx) => idx !== idxToDelete))
    }

    return (
        <div>
            <h2>Skills</h2>
            <hr/>
            <AddSkill skills={skills} addSkill={addSkill} />
            <p></p>
            <ListSkills skills={skills} deleteSkill={deleteSkill} />
        </div>
    )
}
