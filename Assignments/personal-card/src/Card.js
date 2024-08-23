import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import image from "./priyanshu.png";

function Card() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          border: "1.5px solid black",
          borderRadius: "20px",
          height: "40vh",
          width: "40vw",
          display: "flex",
          background: 'linear-gradient(135deg, #f3e9f3, #f7f1e3)'
        }}
      >
        <div
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={image}
            height={150}
            width="auto"
            alt="priyanshu"
            style={{ borderRadius: "20px 20px 0 0", width: "100%", border: '1px black solid' }}
          />
          <a
          href="https://hey-sainty.web.app"
            style={{
              display: "flex",
              justifyContent: "center",
              background: "white",
              padding: '10px',
              border: '1px solid black',
              borderRadius: "10px",
              fontSize: "16px",
              textDecoration: 'none',
              color: 'black'
            }}
          >
            View Portfolio
          </a>
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontStyle: "italic", fontSize: "18px", margin: "0" }}>
            Hi, I am...
          </p>
          <p
            style={{ fontWeight: "bolder", fontSize: "35px", margin: "10px 0" }}
          >
            Priyanshu Chaurasiya
          </p>
          <p style={{ fontWeight: "600", fontSize: "20px", margin: "10px 0" }}>
            MERN Stack Developer | Blogger
          </p>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>
          Ready to bring your website vision to life? <br /> Let's make it happen together!

          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px",
            }}
          >
            <a
              href="https://twitter.com/iam__sainty"
              aria-label="Twitter"
              style={{ color: "#1DA1F2", fontSize: "24px" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/iam__sainty"
              aria-label="Instagram"
              style={{ color: "#C13584", fontSize: "24px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/iamsainty"
              aria-label="LinkedIn"
              style={{ color: "#0077B5", fontSize: "24px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/iamsainty"
              aria-label="GitHub"
              style={{ color: "#333", fontSize: "24px" }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
