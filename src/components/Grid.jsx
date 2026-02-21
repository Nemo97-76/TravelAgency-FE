import { Button } from "@mui/joy"
import React from "react"
import { useNavigate } from "react-router-dom"
const Grid = () => {
    const x = useNavigate()
    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", paddingBottom: "10px", width: "fit-content", margin: "0 auto 10vh" }}>Top destinations</h4>
            <div className="Grid">
                <div className="div1 div">
                    <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", textAlign: "center", color: "white", zIndex: 5 }}>
                        <p>up to</p>
                        <h2 style={{ fontSize: "100px" }}>50%</h2>
                        <p>Holiday packages</p>
                        <a style={{ textDecoration: "none", color: "white" }} href="#book-Now">
                            <Button sx={{ bgcolor: "#4d84c8" }} >Book now</Button>
                        </a>
                    </div>
                </div>
                <div className="div2 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>china</p>
                </div>
                <div className="div3 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>darjeeling</p>
                </div>
                <div className="div4 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>malaysia</p>
                </div>
                <div className="div5 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>ganalok</p>
                </div>
                <div className="div6 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>thailand</p>
                </div>
                <div className="div7 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>australia</p>
                </div>
                <div className="div8 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>london</p>
                </div>
                <div className="div9 div">
                    <p style={{ position: "absolute", zIndex: 5, top: "50%", left: "50%", translate: "-50% -50%", color: "white" }}>USA</p>
                </div>
                <Button className="div10" onClick={() => x("/destinations")}>view all</Button>
            </div>
        </>
    )
}
export default Grid