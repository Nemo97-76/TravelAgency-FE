import React from "react"
import img from "../images/Everest Base Camp Trek.jpg"
import img2 from "../images/Dolomites Italy - Best Places To Visit in the Dolomites + 1-Week Itinerary.jpg"
import img3 from "../images/Solo Female Travel_ Advice from Women Who Know.jpg"
import img4 from "../images/Two Guys From Germany Decided To Explore This Awesome World, Here Is The Best Of What They’ve Seen So Far (30 Pics).jpg"
import img5 from "../images/GettyImages-1160384397_55_660x440.webp"
import { Button } from "@mui/joy"
import { FaArrowRight } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx";
const News = () => {
    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", paddingBottom: "10px", width: "fit-content", margin: "10vh auto" }}>last travel news</h4>
            <div className="newsParent">
                <div className="mountain-card" id="div1">
                    <img
                        alt="img"
                        src={img}
                        className="mountain-image"
                    />
                    <div className="mountain-content">
                        <p style={{ textAlign: "left" }}>Revolutionising the travel industry, one partnership at a time</p>
                        <p style={{ marginTop: "-10px", textAlign: "left" }}><span style={{ color: "#2f60ae" }}>25 Oct 2021</span><RxDotFilled style={{ color: "grey" }} /><span style={{ color: "grey" }}>5 min read</span></p>
                    </div>
                </div>
                <div className="mountain-card" id="div2">
                    <img
                        alt="img"
                        src={img2}
                        className="mountain-image"
                    />
                    <div className="mountain-content">
                        <p style={{ textAlign: "left" }}>it is a long established fact that a reader will be distracted.</p>
                        <p style={{ marginTop: "-10px", textAlign: "left" }}><span style={{ color: "#2f60ae" }}>25 Oct 2021</span><RxDotFilled style={{ color: "grey" }} /><span style={{ color: "grey" }}>3 min read</span></p>
                    </div>
                </div>
                <div className="mountain-card" id="div3">
                    <img
                        alt="img"
                        src={img3}
                        className="mountain-image"
                    />
                    <div className="mountain-content">
                        <p style={{ textAlign: "left" }}>There are many variations of passages of sum available</p>
                        <p style={{ marginTop: "-10px", textAlign: "left" }}><span style={{ color: "#2f60ae" }}>25 Oct 2021</span><RxDotFilled style={{ color: "grey" }} /><span style={{ color: "grey" }}>2 min read</span></p>
                    </div>
                </div>
                <div className="mountain-card" id="div4">
                    <img
                        alt="img"
                        src={img4}
                        className="mountain-image"
                    />
                    <div className="mountain-content">
                        <p style={{ textAlign: "left" }}>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                        <p style={{ marginTop: "-10px", textAlign: "left" }}><span style={{ color: "#2f60ae" }}>25 Oct 2021</span><RxDotFilled style={{ color: "grey" }} /><span style={{ color: "grey" }}>4 min read</span></p>
                    </div>
                </div>
                <Button className="articlBTN" sx={{ bgcolor: "transparent", color: "#2f60ae", transition: "0.3s", width: "fit-content", position: "relative", left: "35px", marginTop: "-20px" }}>see all articles<FaArrowRight className="articlArrow" /> </Button>
                <div id="div5">
                    <img src={img5} alt="img" style={{ width: "100%", height: "70%", objectFit: "cover", marginBottom: "10px", borderRadius: "5px 5px 0 0" }} />
                    <p>There are many variations of passages available but</p>
                    <p style={{ color: "grey" }}>It is a long established fact that a reader will be distracted by the readable content of. The point of using Lorem Ipsum is that it has a more
                        It is a long established fact that a reader will be distracted by the readable long established fact that a reader will be distracted content of a page when looking at its layout.</p>
                    <Button className="articlBTN" sx={{ bgcolor: "transparent", color: "#2f60ae", transition: "0.3s" }}>Read full article<FaArrowRight className="articlArrow" /> </Button>
                </div>
            </div>
        </>
    )
}
export default News