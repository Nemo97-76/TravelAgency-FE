import { Card } from "@mui/joy";
import React from "react";
import  card1img from "../images/Travel Diary_ Paris in the Spring.jpg";
import  card2img from "../images/London\ 2\ day\ Itinerary\ –\ London\ in\ 2\ days\ _\ Travelgal\ Nicole.jpg";
import  card3img from "../images/HOW\ TO\ LIVE\ A\ LIFE\ OF\ TRAVEL_\ TIPS\ TO\ GETTING\ STARTED.jpg";
const Intro = () => {
    return (
        <>
            <div className="Intro d-flex" style={{ gap: 30, width: "80%", margin: "20vh auto 20vh" }}>
                <div sx={{ border: "none", bgcolor: "transparent" }}>
                    <div style={{ position: "relative", top: "50%", left: "50%", translate: "-50% -50%", display: "flex", flexDirection: "column" }}>
                        <span>
                            Go Beyond Your <span style={{ borderBottom: " black solid 1px" }}>Imagination</span>
                        </span><br />
                        <span style={{ color: "grey", textTransform: "capitalize" }}>
                            Discover your ideal exprience width us
                        </span>
                    </div>
                </div>
                <div className="card1 cardHover">
                    <p className="cardText " style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center", marginBottom: "0px" }} >7% discout for all Airlines</p>
              <img src={card1img}/>
                </div>
                <div className="card2 cardHover">
                    <span className="cardText" style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center" }}>travel around the world</span>
              <img src={card2img}/> 
                </div>
                <div className="card3 cardHover">
                    <span className="cardText" style={{ color: "white", fontSize: "25px", zIndex: 5, position: "absolute", left: "50%", bottom: "0", translate: "-50% 0", width: "80%", textAlign: "center" }}>luxury resorts top deals</span>
              <img src={card3img}/> 
                </div>

            </div >
        </>
    )
}
export default Intro 