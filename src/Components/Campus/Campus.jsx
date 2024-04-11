import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/galery1.png'
import gallery2 from '../../assets/galery2.png'
import gallery3 from '../../assets/galery3.png'
import gallery4 from '../../assets/galery4.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Campus = () => {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <a href="https://www.addu.edu.ph/campus-tour-and-visit-rules/" target='_blank' title='Get know the rules of the university'><button className='btn dark-btn'>
            See more here <FaArrowRightLong className='arrow' />
        </button></a>
    </div>
  )
}

export default Campus