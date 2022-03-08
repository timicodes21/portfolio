import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import picture from '../assets/image2.jpg'
import dynamic from '../assets/dynamic.jpg'
import intuitive from '../assets/intuitive.jpg'
import responsive from '../assets/responsive.jpg'
import userfriendly from '../assets/userfriendly.jpg'
import Graph from './Graph';

const About = () => {
  return (
    <div>
        <section id="about" className="mt-5">
            <Container>
                <div className='mt-5 mb-3 about'>
                    <h3 className="text-center text-ash mt-5 font-32 font-700">ABOUT</h3>
                    <div className="about-line"></div>
                </div>
                <div className='mx-md-5'>
                    <Row className='mx-md-5 pt-5 gx-5'>
                        <div className="col-md-3 col-6 mb-3">
                            <Image fluid src={userfriendly} />
                            <div className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">User Friendly</h4>
                                <p className="font-14 text-ash">Intentional about making it easy for users to find the information they need quickly.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <Image fluid src={responsive} />
                            <div className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Responsive</h4>
                                <p className="font-14 text-ash">My layouts will work on any device, mobile tablets or desktops.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <Image fluid src={intuitive} />
                            <div className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Intuitive</h4>
                                <p className="font-14 text-ash">Strong preference for easy to use, users can focus on a task at hand without stopping, even for a second.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <Image fluid src={dynamic} />
                            <div className="text-center my-3">
                                <h4 className="font-18 font-700 text-ash">Dynamic</h4>
                                <p className="font-14 text-ash">Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </Row>
                </div>
                <Row className='px-md-5 pb-4'>
                    <div className="ps-md-5 col-12 col-md-6">
                        <div className="text-center d-flex flex-column">
                            <div className="">
                                <Image fluid src={picture} className="about-image" />
                            </div>
                            <div className='margin-minus'>
                                <p className='font-500 font-24 text-ash'>Summary?</p>
                                <p className='text-ash font-14'>A <span className="text-cyan font-500">problem solver</span> and <span className="text-cyan font-500">detailed-oriented software developer</span> with less than a year experience of building websites and developing web applications. I am passionate about building a career in software development. <br />Skilled using <span className="text-cyan font-500">HTML, CSS, Bootstrap, Java script</span> and <span className="text-cyan font-500">React Js</span>. I am Excited as I look forward to developing my skills, building Web applications and tackling some of the most pressing problems in the industry to create innovative solutions for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        {/* <Graph className="pt-5"/> */}
                    </div>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default About