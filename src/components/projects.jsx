import React, { useState, useEffect } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import schedule from "../assets/schedule.jpeg";
import weather from "../assets/weather.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import Aos from "aos";

const Projects = () => {
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(true);
  const [display4, setDisplay4] = useState(false);

  const handleMouse1 = () => {
    setDisplay1(false);
    setDisplay2(true);
  };
  const handleMouse2 = () => {
    setDisplay1(true);
    setDisplay2(false);
  };
  const handleMouse3 = () => {
    setDisplay3(false);
    setDisplay4(true);
  };
  const handleMouse4 = () => {
    setDisplay3(true);
    setDisplay4(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-project py-5">
      <section id="portfolio">
        <Container>
          <div className="mt-3 mt-md-5 mb-2 about">
            <h3
              data-aos="fade-down"
              className="d-none d-md-block text-center text-ash mt-5 font-32 font-700"
            >
              {" "}
              PROJECTS
            </h3>
            <h3
              data-aos="fade-down"
              className="d-md-none text-center text-ash mt-5 font-32 font-700"
            >
              {" "}
              PROJECTS
            </h3>
            <div
              data-aos="fade-up"
              className="d-none d-md-block about-line"
            ></div>
            <div
              data-aos="fade-up"
              className="d-md-none about-mobile-line"
            ></div>
          </div>
          <div>
            <Row className="my-3">
              <Col xs={12} md={6}>
                <a
                  href="https://demo.respay.com/signin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Respay - Property Management App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://cepcs-client.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      E-learning Website / App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://social-apppp.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Tik-Tok Clone
                    </button>
                  </div>
                </a>
              </Col>

              <Col xs={12} md={6}>
                <a
                  href="https://www.gameporte.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Gameporte - Landing Page
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://expo.dev/@developer_timi/hello-food"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Hello Food - Food Delivery Mobile App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://futuresoft.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Startup Landing Page
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://timicodes21.github.io/taskmanager/#/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Task Manager App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://timicodes21.github.io/countries/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Countries App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://timicodes21.github.io/drivers/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      Driver's Database App
                    </button>
                  </div>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a
                  href="https://thrift-store-api.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <div className="p-md-3 my-2">
                    <button className="p-3 w-100 text-white project-button shadow">
                      E-commerce Api Documentation
                    </button>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
