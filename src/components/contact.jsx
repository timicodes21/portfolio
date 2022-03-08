import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="bg-navyblue py-5">
        <section id="contact">
            <Container>
                <div className='mt-5 contact'>
                    <h3 className="text-center text-white mt-5 font-32 font-700">CONTACT</h3>
                    <div className="contact-line"></div>
                </div>
                <div className="text-center">
                    <p className='my-4 font-500 font-18 text-cyan'>Have a question or want to work together?</p>
                    <div>
                        <form action="">
                            <div className='input-div'>
                                <input type="text" className='input bg-form w-50' placeholder='Name'/>
                            </div>
                            <div className='input-div my-1'>
                                <input type="text" className='input bg-form w-50' placeholder='Enter Email'/>
                            </div>
                            <div className='input-div my-1'>
                                <textarea cols="30" rows="5" className='input bg-form w-50' placeholder='Your Message'></textarea>
                            </div>
                            <div className=''>
                                <button type="submit" className='w-50 font-14 text-white font-500 submit-button'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Contact