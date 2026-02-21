import React from "react";
import Error from "../images/Untitled design.png"
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
const Errorpage = () => {
    const x = useNavigate()
    return (
        <div className="ErrorMsg">
            <div>
                <img src={Error} alt="404 message" />
                <h6 style={{ textAlign: "center", marginTop: "25px" }}>something went wrong ,please try again later</h6>
                <Button className="returnToHome" onClick={() => x("/")}>back to home page</Button>
            </div>
        </div>
    )
}
export default Errorpage