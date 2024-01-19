import React from "react";
import Webscraper from '../Assets/WebScraper.jpg'
import Zen from '../Assets/Zen.jpg'
import Remind from '../Assets/Remindify.jpg'
import Soul from '../Assets/Soul.jpg'

const Projects = () => {
  return (
    <div className="container-fluid p-5">
      <div
        className="heading pt-5 text-start mb-5"
        style={{ marginLeft: "4%" }}
      >
        Projects
      </div>
      <div className="row" style={{ height: "100%", background: "black" }}>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div className="card bg-dark">
            <div className="card-img">
              <img
                src={Webscraper}
                className="card-img-top"
                alt="webscraper"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title text-warning">Web Scraper</h3>
              <p className="card-text" style={{color: 'white'}}>
                This site can scrape the product information from Amazon, Flipkart and Snapdeal.                
              </p>
              <div className="btn-row ">
                <a
                  href="https://mmurugesan-webscraper.netlify.app/"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MManimekalai/WebScraper-Frontend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/MManimekalai/WebScraper-Backend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div className="card bg-dark">
            <div className="card-img">
              <img
                src= {Zen}
                className="card-img-top"
                alt="urlshort"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title text-warning">Zen Query Resolving System</h3>
              <p className="card-text" style={{color: 'white'}}>
                Students can able to raise their own queries using our Zen Query Resolving System, also its a role based app. Admin and Mentors can able to address queries.
              </p>
              <div className="btn-row ">
                <a
                  href="https://zenclass-queryresolving-system.netlify.app/"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MManimekalai/ZenClassQueryResolving-Frontend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/MManimekalai/ZenClassQueryResolving-Backend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div className="card bg-dark">
            <div className="card-img">
              <img
                src={Remind}
                className="card-img-top"
                alt="urlshort"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title text-warning">Remindify</h3>
              <p className="card-text" style={{color: 'white'}}> 
                You can add you important task here and fix a deadline also, it will remind you through email before your deadline.
              </p>
              <div className="btn-row ">
                <a
                  href="https://mmurugesan-remindify.netlify.app"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MManimekalai/NotesApp-Frontend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/MManimekalai/NotesApp-Backend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
          <div className="card bg-dark">
            <div className="card-img">
              <img
                src={Soul}
                className="card-img-top"
                alt="renten"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title text-warning">Soulmate.com - Your Path to Everlasting Love</h3>
              <p className="card-text" style={{color: 'white'}}>
              Our matrimonial platform is meticulously designed to help individuals find their perfect life partners, creating meaningful connections that last a lifetime.
              </p>
              <div className="btn-row ">
                <a
                  href="https://mmurugesan-soulmate.netlify.app/"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MManimekalai/Soulmate_FrontEnd"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/MManimekalai/Soulmate_Backend"
                  className="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Projects;