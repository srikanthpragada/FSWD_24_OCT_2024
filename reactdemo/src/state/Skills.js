import React, { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])
    let [message, setMessage] = useState("")

    function addSkill() {
        let newSkill = document.getElementById("txtSkill").value
        // skills.push(newSkill)
        // setSkills(skills)
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

    return (
        <div>
            <h2>Skills</h2>
            Skill <input type="text" id="txtSkill" />
            <button onClick={addSkill}>Add</button>
            &nbsp; 
            <span className="text-danger">{message}</span>
            <p></p>
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
                                        <button onClick={() => deleteSkill(idx)}>Del</button>
                                    </li>)
                            }
                        </ul>
                    </div>
                    : <h5>No skills!</h5>
            }
        </div>
    )
}
