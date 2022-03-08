import React, { useState} from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import schedule from '../assets/schedule.jpeg'
import weather from '../assets/weather.jpeg'

const Projects = () => {
  const [display1, setDisplay1] = useState(true)
  const [display2, setDisplay2] = useState(false)
  const [display3, setDisplay3] = useState(true)
  const [display4, setDisplay4] = useState(false)


  const handleMouse1 = () => {
    setDisplay1(false);
    setDisplay2(true);
  }
  const handleMouse2 = () => {
    setDisplay1(true);
    setDisplay2(false)
  }
  const handleMouse3 = () => {
    setDisplay3(false);
    setDisplay4(true)
  }
  const handleMouse4 = () => {
    setDisplay3(true);
    setDisplay4(false)
  }
  return (
    <div className="bg-project py-5">
        <section id="portfolio">
            <Container>
              <div className='mt-3 mt-md-5 mb-2 about'>
                <h3 className="text-center text-ash mt-5 font-32 font-700"> PROJECTS</h3>
                <div className="d-none d-md-block about-line"></div>
                <div className="d-md-none about-mobile-line"></div>
              </div>
              <div>
                <Row>
                  <div className="col-12 col-md-6">
                    <div>
                      {display1 && <Image fluid src={schedule} className="about-image" onMouseEnter={handleMouse1} />}
                      {display2 && <div onMouseLeave={handleMouse2} className="px-md-5 mt-5">
                        <div className="bg-white p-5">
                          <div className="mb-5 pb-5">
                            <h4 className="font-18 font-700 text-ash">My Schedule</h4>
                            <p className="text-pink font-14">React Js</p>
                          </div>
                          <div className="mt-5">
                            <a href="https://timicodes21.github.io/myschedule/#/home" className='pointer text-ash bg-transparent portfolio-button'>view site</a>
                          </div>
                        </div>
                      </div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div>
                      {display3 && <Image onMouseEnter={handleMouse3} fluid src={weather} className="about-image" />}
                      {display4 && <div onMouseLeave={handleMouse4} className="px-md-5 mt-5">
                        <div className="bg-white p-5">
                          <div className="mb-5 pb-5">
                            <h4 className="font-18 font-700 text-ash">Weather App</h4>
                            <p className="text-pink font-14">JavaScript</p>
                          </div>
                          <div className="mt-5">
                            <a href="https://timicodes21.github.io/weather-app/" className='pointer text-ash bg-transparent portfolio-button'>view site</a>
                          </div>
                        </div>
                      </div>}
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
        </section>
    </div>
  )
}

export default Projects