import React, { useState } from "react"
import login from "../images/Login-rafiki.png"
import { Divider, Input } from "@mui/joy"
import { FaUserLarge, FaFacebookF, FaGoogle, FaRegCalendar } from "react-icons/fa6"

import { MdDriveFileRenameOutline, MdAlternateEmail, MdKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const Signup = () => {
    const x = useNavigate()
    const handleNav = () => {
        x("/")
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }; return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", width: "fit-content", margin: "50px auto 0" }}>Sign up</h4>
            <div className="signup">
                <img src={login} alt="img" />
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="signupForm">
                    <Input type="text" endDecorator={<MdDriveFileRenameOutline />} placeholder="name" />
                    <Input placeholder="Email" type="Email" endDecorator={<MdAlternateEmail />} required />
                    <Input placeholder="username" type="text" endDecorator={<FaUserLarge />} required />
                    <Input placeholder="age" type="number" endDecorator={<FaRegCalendar />} required />
                    <Input placeholder="Password" type="password" required endDecorator={<MdKey />} />
                    <Input placeholder="re-enter Password" type="password" required endDecorator={<MdKey />} />
                    <button className="LoginBTN" style={{ backgroundColor: "#4d84c8" }} onClick={handleNav} type="submit">sign up</button>
                    <Divider>
                        or
                    </Divider>
                    <button style={{ backgroundColor: "#1877f2" }} className="LoginBTN"><FaFacebookF /> continue with facebook</button>
                    <button style={{ backgroundColor: "#34a853", marginTop: "-20px" }} className="LoginBTN" ><FaGoogle /> continue with Google</button>
                </Form>
            </div>
        </>
    )
}
export default Signup