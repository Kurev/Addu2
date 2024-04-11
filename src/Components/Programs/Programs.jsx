import React from 'react'
import './Programs.css'
import image_1 from '../../assets/law.png'
import image_2 from '../../assets/migpro.png'
import image_3 from '../../assets/martinhall.png'
import { RiGraduationCapLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="program">
            <img src={image_1} alt="" />
            <div className="caption">
                <RiGraduationCapLine className='icons' />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src={image_2} alt="" />
            <div className="caption">
                <FaBookOpen className='icons' />
                <p>Libraries</p>
            </div>
        </div>
        
        <div className="program">
            <img src={image_3} alt="" />
            <div className="caption">
                <FaBuildingColumns className='icons' />
                <p>Hall</p>
            </div>
        </div>
    </div>
  )
}

export default Programs