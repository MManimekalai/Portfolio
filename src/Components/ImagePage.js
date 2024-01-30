import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profileImage from "../Assets/Passport_Pic.jpg"; 

const ImagePage = () => {
  const [typei] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "MERN Stack Developer"],
    loop: {},
    typeSpeed: 150,
    delaySpeed: 50,
  });

  const containerStyle = {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    // backgroundImage: `url(${profileImage})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    color: "white",
  };

  const contentStyle = {
    overflow: "hidden",
    flex: 1,
  };

  const imageStyle = {
    width: "75%",
    height: "75%",
    objectFit: "cover", // Ensure the image covers the entire space
    borderRadius: "10%", // Make the image circular (optional)
  };

  return (
    <div style={containerStyle}>
      <div className="col-md-4">
        <img
          className="profile-pic"
          src={profileImage}
          style={imageStyle}
          alt="profile"
        />
      </div>
      <div style={contentStyle} data-aos="fade-left" data-aos-duration="1000">
        <h5 className="for-name">HI, I'M Manimekalai Murugesan.</h5>
        <h1>
          I'm a
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              paddingLeft: "25px",
            }}
          >
            {typei}
          </span>
        </h1>
      </div>      
      <a className="contact-button btn btn-warning mb-5" href="#contact">
        Contact
      </a>
    </div>
  );
};

export default ImagePage;
