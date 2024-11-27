import React, { useState } from 'react'

function AddSkill() {
    return (
        <h2>Add Skills</h2>
    )
}

function ListSkills({ skills }) {
    return (
        <div>
            {
                skills.length > 0 ?
                    <div>
                        <h4>Current Skills</h4>
                        <ul>
                            {
                                skills.map((skill, idx) =>
                                    <li key={idx}>
                                        {skill}
                                        &nbsp;
                                        <button>Del</button>
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
    let [newSkill, setNewSkill] = useState('Java')
    let [message, setMessage] = useState("")

    function addSkill(evt) {
        evt.preventDefault()  // prevent form submission

        setMessage('')
        if (skills.includes(newSkill))
            setMessage('Duplicate Skill')
        else {
            setSkills([newSkill, ...skills])
        }
    }

    function deleteSkill(idxToDelete) {
        if (window.confirm('Do you want to delete?'))
            setSkills(skills.filter((item, idx) => idx !== idxToDelete))
    }

    function updateSkill(e) {
        //console.log(e.target.value)
        setNewSkill(e.target.value)
    }

    return (
        <div>
            <h2>Skills</h2>
            <form onSubmit={addSkill}>
                Skill <input type="text" id="txtSkill"
                    value={newSkill} onChange={updateSkill} required />
                <button>Add</button>
                &nbsp;
                <span className="text-danger">{message}</span>
            </form>
            <p></p>
            <ListSkills skills={skills} />
        </div>
    )
}
