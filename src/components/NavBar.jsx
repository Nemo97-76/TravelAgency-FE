import React from "react"
import logo from "../images/logo.png"
import { FaChevronDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const x = useNavigate()
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div className="holder">
            <div className="menu__wrapper">
                <div className="menu__bar">
                    <a href="/" aria-label="home" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav>
                        <ul className="navigation hide">
                            <li>
                                <a href="/" >Home</a>
                            </li>
                            <li>
                                <button type="button" onClick={() => x("/sections")}>sections <FaChevronDown className="svg" /> </button>
                                <div className="dropdown__wrapper">
                                    <div className="dropdown">
                                        <div className="list-items-with-description">
                                            <span onClick={() => x("/sections")}>section 1</span><br />
                                            <span onClick={() => x("/sections")}>section 2</span><br />
                                            <span onClick={() => x("/sections")}>section 3</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={() => x("/categories")}>categories<FaChevronDown className="svg" /> </button>
                                <div className="dropdown__wrapper">
                                    <div className="dropdown">
                                        <div className="list-items-with-description">
                                            <span onClick={() => x("/categories")}>category 1</span><br />
                                            <span onClick={() => x("/categories")}>category 2</span><br />
                                            <span onClick={() => x("/categories")}>category 3</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={() => x("/trips")} >trips <FaChevronDown className="svg" /> </button>
                                <div className="dropdown__wrapper">
                                    <div className="dropdown">
                                        <div className="list-items-with-description">
                                            <span onClick={() => x("/trips")}>trip 1</span><br />
                                            <span onClick={() => x("/trips")}>trip 2</span><br />
                                            <span onClick={() => x("/trips")}>trip 3</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/destinations" >destinations</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Button aria-label="Open menu" className="burger-menu" type="button" onClick={onToggle}><IoIosMenu style={{ fontSize: "50px" }} /></Button>
                <Collapse in={isOpen} style={{ width: '100%' }}>
                    <Box
                        animateOpacity
                        style={{ borderRadius: "5%", border: "none" }}
                        p='15px'
                        color='black'
                        mt='4'
                        bg='white'
                        rounded='md'
                        shadow='md'
                    >
                        <div id="menu">
                            <p onClick={() => { x("/"); onToggle(); }}>home</p>
                            <p onClick={() => { x("/sections"); onToggle(); }}>sections</p>
                            <p onClick={() => { x("/categories"); onToggle(); }}>categories</p>
                            <p onClick={() => { x("/trips"); onToggle(); }}>trips</p>
                            <p onClick={() => { x("/destinations"); onToggle(); }}>destinations</p>
                            <hr />
                            <div className="mobile-auth">
                                <button onClick={() => { x("/login"); onToggle(); }}>Login</button>
                                <button onClick={() => { x("/signup"); onToggle(); }}>Sign Up</button>
                            </div>
                        </div>
                    </Box>
                </Collapse>
            </div>
        </div>
    )
}
export default NavBar