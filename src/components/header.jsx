import React, { useEffect, useState } from "react";
import "../index.css";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import NavBar from "./NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const x = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`Header  ${isScrolled ? "scrolled" : ""}`} id="book-Now">
        <div className="Headerupper">
          <div className="left">
            <CiFacebook />{" "}
            <FaGithub
              onClick={() =>
                window.location.replace("https://github.com/Nemo97-76")
              }
            />{" "}
            <CiInstagram />{" "}
            <CiLinkedin
              onClick={() =>
                window.location.replace(
                  "https://www.linkedin.com/in/tasneem-youssef-770708278/",
                )
              }
            />
   <span  className="contact-info">
             | +20 1000079761 | tasneemyoussef61@gmail.com
   </span>
          </div>
          <div className="right desktop-only hide">
            <button onClick={() => x("/login")}>Login</button> {" | "}
            <button onClick={() => x("/signup")}>Sign Up</button>
          </div>
        </div>
        <hr style={{ color: "white" }} className="desktop-only"/>
        <div className="HeaderLower">
          <NavBar />
        </div>
      </div>
    </>
  );
};
export default Header;
