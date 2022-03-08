import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

import { Row, Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <div className='bg-darkblue pt-5 pb-3'>
        <section id="footer" className="text-center">
            <Container>
                <div>
                    <div className="bg-pink totop">
                        <a href="#home"><FaArrowUp /></a>
                    </div>
                    <div className="mt-5 mb-4">
                        <Row>
                            <div className="col-12 col-md-4"></div>
                            <div className="col-12 col-md-4">
                                <Row className="px-5">
                                    <div className="col-3">
                                        <div className="social-div pointer">
                                            <a href="https://www.linkedin.com/in/timileyin-babalola-283b4b149/"><FaLinkedinIn /></a>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="social-div pointer">
                                            <a href=""><FaFacebookF /></a>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="social-div pointer">
                                            <a href="https://github.com/timicodes21"><FaGithub /></a>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="social-div pointer">
                                            <a href="https://www.instagram.com/dev_timi/"><FaInstagramSquare /></a>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className="col-12 col-md-4"></div>
                        </Row>
                    </div>
                    <div>
                        <p className="font-12 text-ash">TIMILEYIN BABALOLA <span className='text-pink'>&#169; 2022</span> </p>
                    </div>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Footer