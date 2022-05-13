import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Navigationbar = () => {
    const [display, setDisplay] = useState(false)
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(false)
    
    const handleClick = () => {
        setDisplay(true)
        setOpen(false)
        setClose(true)
    }

    const handleClose = () => {
        setDisplay(false)
        setOpen(true)
        setClose(false)
    }

    const closeStyle = { 
        display: 'none',
        transition: 'display 1s'
    }

    const openStyle = { 
        display: 'block',
        transition: 'display 1s'
    }

  return (
    <div className='sticky'>
        <div>
            <Navbar className='navigbar d-none d-md-block'>
                <Container className="px-5">
                    <Nav className="me-auto">
                        <div className="p-2"><a href="#home" className='text-white font-14 navlink'>HOME</a></div>
                        <div className="p-2"><a href="#about" className='text-white font-14 navlink'>ABOUT</a></div>
                        <div className="p-2"><a href="#portfolio" className='text-white font-14 navlink'>PORTFOLIO</a></div>
                        <div className="p-2"><a href="#contact" className='text-white font-14 navlink'>CONTACT</a></div>
                    </Nav>
                </Container>
            </Navbar>
            <div className='navigbar d-md-none'>
                <Container className="">
                    <div className="d-flex flex-column">
                        {open && <div className="p-3 d-flex justify-content-end"><FiMenu className='hamburger' onClick={handleClick} /></div>}
                        {close && <div className="p-3 d-flex justify-content-end"><AiOutlineClose className='close' onClick={handleClose} /></div>}
                        <div className="mobile-nav" style={display? openStyle : closeStyle}>
                            <div className="p-2"><a href="#home" className='text-white font-14 navlink'>HOME</a></div>
                            <div className="p-2"><a href="#about" className='text-white font-14 navlink'>ABOUT</a></div>
                            <div className="p-2"><a href="#portfolio" className='text-white font-14 navlink'>PORTFOLIO</a></div>
                            <div className="p-2"><a href="#contact" className='text-white font-14 navlink'>CONTACT</a></div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-cyan line"></div>
        </div>
    </div>
  )
}

export default Navigationbar

