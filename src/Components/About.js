import React from "react";
import AboutPic from '../Assets/Full-Stock-Hero.jpeg'

const About = () => {
  return (
    <div style={{ height: "100%", background: "black" }}>
      <div className="container">
        <div className="row pt-5">
          <div className="heading pt-5 text-start">About Me</div>

          <div className="col-md-5" style={{ overflow: "hidden" }}>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              //style={{ height: "90%", width: "90%" }}
              src= {AboutPic}
              alt="images"
            />
          </div>
          <div
            className="col-md-7 text-start objective "
            style={{ overflow: "hidden" }}
          >
            <div data-aos-duration="1000" data-aos="fade-right">
              <br />
              <p>
                My name is Manimekalai. I'm an MERN-Full Stack Developer from
                TamilNadu, India
              </p>
              <br />
              <p>
                I'm an passionated developer always challenging myself to learn
                new skills in web developement everyday. I can work with
                Front-End as well as Back-End. I develope web applications using{" "}
                <b>MERN</b>. I'm familiar with developing layouts that provided
                to me.
              </p>
              <br />
              <p>
                I'm an hardworking smart worker and always seek to achieve my
                best version.
              </p>
              <a
                className="text-decoration-none"
                href="https://drive.google.com/file/d/1O6JyucdoD4EqBQheJqXKnRJE86vEc4yy/view?usp=drive_link"
                rel="noreferrer"
                target="_blank"
              >
                Click here for my resume
              </a>
              <br />
              <a
                className="text-decoration-none"
                href="https://drive.google.com/drive/folders/1WL4enq4NN0pn6ncQWlxujR6vnPvcVwdm?usp=drive_link"
                rel="noreferrer"
                target="_blank"
              >
                Click here for FSD Cerificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;