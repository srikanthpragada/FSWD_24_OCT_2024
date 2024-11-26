import React, { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])
    let [message, setMessage ] = useState("")

    function addSkill() {
        let newSkill = document.getElementById("txtSkill").value
        // skills.push(newSkill)
        // setSkills(skills)
        setSkills([newSkill, ...skills])
    }

    function deleteSkill(idxToDelete) {
        setSkills( skills.filter( (item, idx) => idx !== idxToDelete))
    }

    return (
        <div>
            <h2>Skills</h2>
            Skill <input type="text" id="txtSkill" />
            <span classname="text-danger">{message}</span>
            <button onClick={addSkill}>Add</button>
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
