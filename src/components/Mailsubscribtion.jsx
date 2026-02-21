import React from "react"
import mail from "../images/email_7945031.png"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
const MailSubScribtion = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }

        setValidated(true);
    };
    return (
        <>
            <div className="mail" id="Mail-Subscribtion">
                <div>

                    <div className="imageANDtext">

                        <img src={mail} alt="mail" />

                        <div>
                            <p>Get the latest news and offers</p>
                            <p style={{ fontSize: "25px", marginTop: "-15px" }}>Subscribe to our newsletter</p>
                        </div>

                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: "100%", poistion: "relative", height: "fit-content", }}>
                        <Row className="mb-3" style={{ width: "50%", margin: "auto", marginTop: "120px", }}>

                            <Form.Group md="4" controlId="validationCustomUsername" style={{ position: "relative", top: "50%" }}>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your Email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <Button type="submit" style={{ position: "absolute", right: "10px", top: 0, height: "37px", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, zIndex: 5, backgroundColor: "#4d84c8" }}>subscribe</Button>
                            </Form.Group>
                        </Row>
                    </Form>


                </div>
            </div>
        </>
    )
}
export default MailSubScribtion