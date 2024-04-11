import React from 'react'
import './Contact.css'
import { BiSolidMessageEdit } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "696bc2f3-1bcd-46f6-a00c-e4e6c6a860be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message <BiSolidMessageEdit className='envelope' /></h3>
            <p>Should you have any inquiries or concerns regarding the university, we encourage you to avail yourself of this opportunity to seek clarification. Your questions are valued, and we are committed to providing comprehensive assistance and support to address any uncertainties you may encounter about our institution.</p>
            <ul>
                <li><FaEnvelope className='contact-icon' /> Kurtmontes154@gmail.com</li>
                <li><BsTelephoneFill className='contact-icon' /> +1 123-534-6452</li>
                <li><FaLocationDot className='contact-icon' /> Ateneo de Davao University Roxas Avenue, 8016 Davao City Davao del Sur, Philippines</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />

                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <FaArrowRightLong className='arrow' /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact