import React, { useEffect, useState } from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import picture from '../assets/image2.jpg'
import dynamic from '../assets/dynamic.jpg'
import intuitive from '../assets/intuitive.jpg'
import responsive from '../assets/responsive.jpg'
import userfriendly from '../assets/userfriendly.jpg'
import resume from '../assets/resume.png'
import { AiOutlineClose } from 'react-icons/ai'
import Aos from "aos"

const About = () => {
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)

    const handleMouse1 = () => {
        setDisplay1(false);
        setDisplay2(true);
    }
    const handleMouse2 = () => {
        setDisplay1(true);
        setDisplay2(false)
    }

    useEffect(() => {
        Aos.init({ duration: 1000})
    }, [])

  return (
    <div>
        <section id="about" className="mt-5">
            <Container>
                <div className='mt-5 mb-3 about'>
                    <h3 data-aos="fade-down" className="d-none d-md-block text-center text-ash mt-5 font-32 font-700">ABOUT</h3>
                    <h3 data-aos="fade-down" className="d-md-none text-center text-ash mt-5 font-32 font-700">ABOUT</h3>
                    <div data-aos="fade-up" className="d-none d-md-block about-line"></div>
                    <div data-aos="fade-up" className="d-md-none about-mobile-line"></div>
                </div>
                <div className='mx-md-5'>
                    <Row className='mx-md-5 pt-5 gx-md-5'>
                        <div className="col-md-3 col-6 mb-3">
                            <div data-aos="flip-left" data-aos-delay="50" className="d-none d-md-block"><Image fluid src={userfriendly} /></div>
                            <div data-aos="flip-left" data-aos-delay="50" className="d-md-none mobile-icon"><Image fluid src={userfriendly} /></div>
                            <div data-aos="fade-in" className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">User Friendly</h4>
                                <p className="font-14 text-ash">Intentional about making it easy for users to find the information they need quickly.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <div data-aos="flip-left" data-aos-delay="300" className="d-none d-md-block"><Image fluid src={responsive} /></div>
                            <div data-aos="flip-left" data-aos-delay="300" className="d-md-none mobile-icon"><Image fluid src={responsive} /></div>
                            <div data-aos="fade-in" className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Responsive</h4>
                                <p className="font-14 text-ash">My layouts will work on any device, mobile tablets or desktops.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <div data-aos="flip-left" data-aos-delay="550" className="d-none d-md-block"><Image fluid src={intuitive} /></div>
                            <div data-aos="flip-left" data-aos-delay="550" className="d-md-none mobile-icon"><Image fluid src={intuitive} /></div>
                            <div data-aos="fade-in" className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Intuitive</h4>
                                <p className="font-14 text-ash">Strong preference for easy to use, users can focus on a task at hand without stopping, even for a second.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <div data-aos="flip-left" data-aos-delay="800" className="d-none d-md-block"><Image fluid src={dynamic} /></div>
                            <div data-aos="flip-left" data-aos-delay="800" className="d-md-none mobile-icon"><Image fluid src={dynamic} /></div>
                            <div data-aos="fade-in" className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Dynamic</h4>
                                <p className="font-14 text-ash">Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </Row>
                </div>
                <Row className='px-md-5 pb-4'>
                    <div data-aos="zoom-in" className="ps-md-5 col-12 col-md-6">
                        <div className="text-center d-flex flex-column">
                            <div className="">
                                <Image fluid src={picture} className="about-image" />
                            </div>
                            <div className='margin-minus'>
                                <p className='font-500 font-24 text-ash'>Summary?</p>
                                <p className='text-ash font-14'>A <span className="text-cyan font-500">problem solver</span> and <span className="text-cyan font-500">detailed-oriented software developer</span> with professional experience in building websites and developing web applications. I am passionate about building a career in software development. <br />Skilled using <span className="text-cyan font-500">HTML, CSS, Bootstrap, Java script, React JS, Redux, Node JS, Express JS</span> and <span className="text-cyan font-500">MongoDB</span>. A well-organized team player with the ability to produce content on time with attention to details demonstrating strong communication and leadership skills. Willingness to learn and develop skills in software development coupled with staying up to date with current trends.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-12 col-md-6 pt-5 pt-md-1">
                        <div>
                        {display1 && <Image onMouseEnter={handleMouse1} onClick={handleMouse1} fluid src={resume} className="about-image" />}
                        {display2 && <div onMouseLeave={handleMouse2} className="px-md-5 mt-5">
                            <div className="bg-white p-5">
                            <div className="mb-5 pb-5">
                                <div className="d-flex justify-content-between">
                                    <h4 className="font-18 font-700 text-ash">Resume</h4>
                                    <AiOutlineClose className='close-icon' onClick={handleMouse2} />
                                </div>
                                <p className="text-pink font-14">Frontend Developer</p>
                            </div>
                            <div className="mt-5">
                                <a href="https://docs.google.com/document/d/1CE5eTVTJm1W4IoU8rWmZUKK4WQ8aM7IJb0BoSjcqK-U/edit?usp=sharing" className='pointer text-ash bg-transparent portfolio-button' target="_blank" rel="noreferrer">View Resume</a>
                            </div>
                            </div>
                        </div>}
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default About