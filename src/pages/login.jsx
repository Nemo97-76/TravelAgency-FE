import React, { useState } from "react"
import login from "../images/Login-rafiki.png"
import { Divider } from "@mui/joy"
import { FaFacebookF, FaGoogle } from "react-icons/fa6"
/* import { useNavigate } from "react-router-dom"
 */import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/slices/users/usersSlice.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap"
const Login = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "tasneemyoussef61@gmail.com",
        password: "sara12#"
    });
    const { email, password } = formData;
    const onchangehandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUserAction({ email, password }))
    }
    /* const { userAuth } = {};
    if (userAuth?.userInfo?.status) {
        window.location.href = "/"
    } */
    useSelector((state) => {
        console.log(state)
    })
/*     const x = useNavigate()
 */    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", width: "fit-content", margin: "50px auto 0" }}>Login</h4>
            <div className="login">
                <img src={login} alt="img" />
                <Form className="loginForm" onSubmit={onSubmitHandler}>
                    <h5>Email</h5>
                    <InputGroup hasValidation>
                        <FormControl
                            name="email"
                            value={email}
                            onChange={onchangehandler}
                            type="email"
                            placeholder="email"
                            aria-describedby="inputGroupPrepend"
                            required
                            className="loginEmail"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your Email.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <h5>password</h5>
                    <InputGroup hasValidation>
                        <FormControl
                            name="password"
                            value={password}
                            onChange={onchangehandler}
                            type="password"
                            placeholder="password"
                            aria-describedby="inputGroupPrepend"
                            required
                            className="loginPass"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Button type="submit" className="LoginBTN" style={{ backgroundColor: "#4d84c8" }} /*  onClick={() => x("/")} */ >sign in</Button>
                    <Divider>
                        or
                    </Divider>
                    <Button style={{ backgroundColor: "#1877f2" }} className="LoginBTN"><FaFacebookF /> continue with facebook</Button>
                    <Button style={{ backgroundColor: "#34a853", marginTop: "-25px" }} className="LoginBTN" ><FaGoogle /> continue with Google</Button>
                </Form>



                {/* <div className="loginForm" onSubmit={onSubmitHandler}>
                    <Input className="loginEmail" placeholder="Email" type="Email" required name="email" value={email} onChange={onchangehandler} />
                    <Input className="loginPass" placeholder="Password" type="password" required name="password" value={password} onChange={onchangehandler} />
                    <button className="LoginBTN" style={{ backgroundColor: "#4d84c8" }} onClick={() => x("/")} type="submit">sign in</button>
                    <Divider>
                        or
                    </Divider>
                    <button style={{ backgroundColor: "#1877f2" }} className="LoginBTN"><FaFacebookF /> continue with facebook</button>
                    <button style={{ backgroundColor: "#34a853", marginTop: "-25px" }} className="LoginBTN" ><FaGoogle /> continue with Google</button>
                </div> */}
            </div>
        </>
    )
}
export default Login