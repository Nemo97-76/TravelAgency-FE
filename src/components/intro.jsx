import { Card } from "@mui/joy";
import React from "react";
const Intro = () => {
    return (
        <>
            <div className="Intro d-flex" style={{ gap: 30, width: "80%", margin: "0 auto 20vh" }}>
                <Card sx={{ border: "none", bgcolor: "transparent" }}>
                    <div style={{ position: "relative", top: "50%", left: "50%", translate: "-50% -50%", display: "flex", flexDirection: "column" }}>
                        <span>
                            Go Beyond Your <span style={{ borderBottom: " black solid 1px" }}>Imagination</span>
                        </span><br />
                        <span style={{ color: "grey", textTransform: "capitalize" }}>
                            Discover your ideal exprience width us
                        </span>
                    </div>
                </Card>
                <Card className="card1 cardHover">
                    <p className="cardText " style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center", marginBottom: "0px" }} >7% discout for all Airlines</p>
                </Card>
                <Card className="card2 cardHover">
                    <span className="cardText" style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center" }}>travel around the world</span>
                </Card >
                <Card className="card3 cardHover">
                    <span className="cardText" style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center" }}>luxury resorts top deals</span>
                </Card >

            </div >
        </>
    )
}
export default Intro 