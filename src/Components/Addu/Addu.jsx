import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Addu.css'

const Addu = () => {
  return (
    <div className='addu container' id='addu'>
        <div className="addu-text">
            <h1>Join Ateneo de Davao for superior education</h1>
            <p>ADDU is the best and most prestigious school in Mindanao and one of the best in the Philippines in the field of business and law. It's a Filipino Catholic establishment run by the Jesuits with special focus in academic and work excellence; hence, it's standards are so high.</p>
            <a href="https://www.addu.edu.ph/" target="_blank" title='Visit the main page of ADDU'><button className='btn'>Visit the Main Page <FaArrowRightLong className='arrow' /> </button></a>
        </div>

    </div>
  )
}

export default Addu