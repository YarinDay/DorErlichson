import React from 'react'
import { NavLink } from 'react-router-dom'
import process1 from "../assets/img/trainers/process1.png"
import process2 from "../assets/img/trainers/process2.png"
import process3 from "../assets/img/trainers/process3.png"
import process4 from "../assets/img/trainers/process4.png"
import process5 from "../assets/img/trainers/process5.png"

export function Projects() {
    const processArr = [process1, process4, process5, process2, process3]
    window.scrollTo(0, 0);

    return (
        <div className="app-home main-view main-layout project-section">
            <div className='headline-container process-container'>
                {processArr.map((process, idx) => {
                    return <img key={idx} src={process} alt='' />
                })}
            </div>
            <NavLink to='/' className={'back-btn text-decoration'}><span>חזור</span></NavLink>
        </div>
    )
}