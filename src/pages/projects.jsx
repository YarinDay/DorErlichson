import React from 'react'
import { NavLink } from 'react-router-dom'
import FirstImg from "../assets/img/trainers/FirstImg.png"
import process1 from "../assets/img/trainers/process1.png"
import process2 from "../assets/img/trainers/process2.png"
import process3 from "../assets/img/trainers/process3.png"
import process4 from "../assets/img/trainers/process4.png"
import process5 from "../assets/img/trainers/process5.png"
import process6 from "../assets/img/trainers/process6.png"
import process7 from "../assets/img/trainers/process7.png"
import { Image } from 'antd'

export function Projects() {
    const processArr = [FirstImg, process4, process1, process6, process7, process5, process2, process3]
    window.scrollTo(0, 0);

    return (
        <div className="app-home main-view main-layout project-section">
            <div className='headline-container process-container'>
                {processArr.map((process, idx) => {
                    return  <Image
                    key={idx}
                    width={300}
                    src={process}
                  />
                })}
            </div>
            <NavLink to='/' className={'back-btn text-decoration'}><span>חזור</span></NavLink>
        </div>
    )
}