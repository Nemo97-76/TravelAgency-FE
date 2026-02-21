import { Card, Input } from "@mui/joy"
import React from "react"
import { MdGroups } from "react-icons/md";
const SelectTour = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Card className="destinationInput selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>destination</span>
                    </div>
                    <Input placeholder="where is your destination ?" sx={{ backgroundColor: "transparent", boxShadow: "none", border: "none", fontSize: "15px", margin: "-10px 0" }} />
                </Card>

                <Card sx={{ width: "30%" }} className="selectInput ms-3">
                    <div className="fromHeader" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "20px" }}>journey Date</span>
                        <span style={{ fontSize: "20px" }}>return Date</span>
                    </div>
                    <div style={{ gap: 5, display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <Input type="date" sx={{ width: "7rem", border: "none", bgcolor: "transparent", boxShadow: "none", color: "grey", margin: "-10px 0" }} />
                        <Input type="date" sx={{ width: "7rem", border: "none", bgcolor: "transparent", boxShadow: "none", color: "grey", margin: "-10px 0" }} />
                    </div>
                </Card>
                <Card className="selectInput ms-3">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>numbers of passenger</span>
                        <MdGroups style={{ fontSize: "40px" }} />
                    </div>
                    <div style={{ display: "flex", marginBottom: "-17px" }}>
                        <Input type="number" defaultValue="0" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey", width: "min-content", height: "35px" }} />
                        <p style={{ marginTop: "-5px" }}>passengers</p>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default SelectTour