import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <section className="homepage" id="home">
        <Container fluid className="text-center text-white">
          <div className="">
            <p className="font-500 font-32 p-50">
              Hello, I'm <span className="text-pink">Timileyin Babalola</span>{" "}
              <br />
              I'm a Web and Mobile App Developer
            </p>
            <a
              href="#portfolio"
              className="pointer text-white bg-transparent work-button"
            >
              view my work &nbsp; <FaArrowRight />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
