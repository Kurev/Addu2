import React, { useRef } from 'react'
import './Testemonials.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import user1 from '../../assets/xian.png'
import user2 from '../../assets/josh.png'
import user3 from '../../assets/loejee.png'
import user4 from '../../assets/evan.png'
import user5 from '../../assets/hans.png'
import user6 from '../../assets/lexus.png'
import user7 from '../../assets/ceejay.png'


const Testemonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -60){
        tx -= 14.349;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < -10){
        tx += 14.3;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials' id='testimonials'>
        <h1 className='back' onClick={slideBackward}><FaArrowAltCircleLeft /></h1>
        <h1 className="next" onClick={slideForward}><FaArrowAltCircleRight /></h1>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/Xxtiannn" target="_blank"><h3><img src={user1} alt="" /></h3></a>
                            <div>
                            <a href="https://www.facebook.com/Xxtiannn" target="_blank"><h3>Christian Lopez</h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>Ateneo de Davao University (ADDU) is a reputable educational institution known for its commitment to academic excellence and holistic development of students. It offers diverse programs and fosters a vibrant community dedicated to service and leadership.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/profile.php?id=100048322296303" target="_blank"><h3><img src={user2} alt="" /></h3></a>
                            <div>
                            <a href="https://www.facebook.com/profile.php?id=100048322296303" target="_blank"><h3><h3>Adrian Josh Pelayo</h3></h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>Ateneo de Davao University is considered a good school due to its strong academic programs, emphasis on holistic education, community service and social justice initiatives. Additionally, its vibrant campus culture and supportive learning environment contribute to its reputation as a reputable educational institution.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/loejeemiguellawas.dulaugon" target="_blank"><img src={user3} alt="" /></a>
                            <div>
                            <a href="https://www.facebook.com/loejeemiguellawas.dulaugon" target="_blank"><h3>Loejee Miguel Lawas Dulaugon</h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>ADDU is truly one of the most prestigious universities in davao. It has top of the line equipment and is always fillled with student extra-curricular activites.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/Swiviry" target="_blank"><img src={user4} alt="" /></a>
                            <div>
                            <a href="https://www.facebook.com/Swiviry" target="_blank"><h3>Evan Erl P. Sunga</h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>Ateneo de Davao University (ADDU) is widely regarded as one of the top universities in the Philippines, known for its academic excellence, strong values formation, and commitment to social responsibility. While opinions on the "best" school may vary depending on individual preferences and criteria, ADDU consistently ranks high among reputable educational institutions in the country.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/Hxbuslon" target="_blank"><img src={user5} alt="" /></a>
                            <div>
                            <a href="https://www.facebook.com/Hxbuslon" target="_blank"><h3>Hans Xavier Buslon </h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>At Ateneo de Davao University, students benefit from rigorous academic programs and a strong emphasis on holistic development, fostering a vibrant community dedicated to social engagement and academic excellence. The university's beautiful campus and diverse student body further enrich the overall learning experience.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/profile.php?id=100082829777182" target="_blank"><img src={user6} alt="" /></a>
                            <div>
                            <a href="https://www.facebook.com/profile.php?id=100082829777182" target="_blank"><h3>Lexus Andrew Suelto Maligsay</h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>Students are immersed in a lively academic atmosphere that prioritizes rigorous coursework alongside comprehensive personal development. The university fosters a strong sense of community, where students are encouraged to excel academically while actively engaging with societal issues.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <a href="https://www.facebook.com/Didooooot" target="_blank"><img src={user7} alt="" /></a>
                            <div>
                            <a href="https://www.facebook.com/Didooooot" target="_blank"><h3>Ceejay Sanchez Regis</h3></a>
                                <span>Student, Philippines</span>
                            </div>
                        </div>
                        <p>Learners experience an invigorating scholastic ambiance marked by demanding course structures and a dedication to comprehensive maturation. Set against the picturesque backdrop of the university's campus, individuals from diverse backgrounds converge to embark on a voyage of education and personal evolution.</p>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Testemonials