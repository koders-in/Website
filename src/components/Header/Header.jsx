import React, { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
import "./Header.scss";
import Image1 from "../../Images/Logo.png";
import Fade from "react-reveal/Fade";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [open, setOpen] = useState(false);
  const link = "/";

  const handleSidebar = () => {
    console.log("TTT");
    setOpen((pre) => !pre);
  };

  return (
    <div className="header" id="#header">
      <HashRouter>
        <Fade top>
          <div className="header-wrapper container">
            <div className="left">
              <Link to={link} tag={Link}>
                <img src={Image1} alt="/"></img>
              </Link>
            </div>
            <div className="right">
              <LinkOption link={link} onClick={handleSidebar} />
            </div>
          </div>
        </Fade>
        {open && (
          <div className="sidebar-wrapper">
            <div className="sidebar">
              <AiOutlineClose
                size={30}
                color="#ffffff"
                onClick={handleSidebar}
              />
              <LinkOption link={link} isMenu={false} />
            </div>
          </div>
        )}
      </HashRouter>
    </div>
  );
}

export default Header;

const LinkOption = ({ isMenu = true, link, onClick }) => {
  return (
    <ul className="Quick Links">
      <li className="au">
        <Link to="/aboutus" tag={Link}>
          About Us
        </Link>
      </li>
      <li className="te">
        <Link to="/ourteam" tag={Link}>
          Team
        </Link>
      </li>
      <li className="te">
        <Link to="/portfolio" tag={Link}>
          Portfolio
        </Link>
      </li>
      <li className="te">
        <Link to="/blog" tag={Link}>
          Blog
        </Link>
      </li>
      <li className="te">
        <Link to="/kommunity" tag={Link}>
          Kommunity
        </Link>
      </li>
      <li className="te">
        <Link to="/Kareer" tag={Link}>
          Kareer
        </Link>
      </li>
      <li>
        {isMenu && (
          <AiOutlineMenu onClick={onClick} size={30} color="#ffffff" />
        )}
      </li>
    </ul>
  );
};
