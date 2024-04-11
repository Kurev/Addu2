import React from 'react'
import './About.css'
import about_img from '../../assets/mgamigo.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Ateneans Are Usually Magis</h2>
            <p>It promotes lifelong learning and the dialogue between academe and the world of work. It protects and promotes the environment as “our common home.” It develops ADDU sui generis leaders who appropriate this mission for life.</p>
            <p> Ateneo offers students not only the chance to achieve academic excellence, but social and spiritual excellence as well. The Ateneo de Davao campus is situated at the heart of the city, but inside resembles an entirely separate city in itself.</p>
            <p>Founded on its strong academic record and its roots in liberal education, the Ateneo has a far-reaching network of international partners, an even more internationalized curriculum and growing study abroad opportunities.</p>
        </div>

    </div>
  )
}

export default About