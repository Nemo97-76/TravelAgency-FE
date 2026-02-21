import { Card, Input, Option, Select, TabPanel } from "@mui/joy";
import React, { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { MdFlightLand } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

const SelectTrip = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Tabs aria-label="tabs" size="sm" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
            <TabList
                disableUnderline
                sx={{
                    p: 0.5,
                    gap: 0.5,
                    borderRadius: 'xl',
                    bgcolor: 'background.level1',
                    [`& .${tabClasses.root}[aria-selected="true"]`]: {
                        boxShadow: 'sm',
                        bgcolor: 'background.surface',
                    },
                    height: "fit-content",
                    position: "fixed",
                    top: "3vh",
                    left: "96%",
                    translate: "-96% 0"
                }}
            >
                <Tab sx={{ width: "100px", height: "3vh", textAlign: "center" }} disableIndicator value={0}>one way</Tab>
                <Tab disableIndicator sx={{ width: "100px", height: "3vh", textAlign: "center" }} value={1}>Roundtrip</Tab>
                <Tab disableIndicator sx={{ width: "100px", height: "3vh", textAlign: "center" }} value={2}>multi cities</Tab>
            </TabList>
            <TabPanel value={0} sx={{ display: "flex" }}>
                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>from</span>
                        <MdFlightTakeoff style={{ fontSize: "40px" }} />
                    </div>
                    <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }}>
                        <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                    </Select>
                    <div className="switch">
                        <GoArrowSwitch className={isClicked ? "arrows" : ""} style={{ transition: "ease-in-out", transitionDuration: "0.5s", fontSize: "35px", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", color: "white" }} onClick={() => setIsClicked(!isClicked)} />
                    </div>
                </Card>
                <Card className="selectInput ms-3">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }} >to</span>
                        <MdFlightLand style={{ fontSize: "40px" }} />
                    </div>
                    <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }}>
                        <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                    </Select>
                </Card>
                <Card className="selectInput ms-3">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>trip date</span>
                    </div>
                    <Input type="date" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey" }} />
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
            </TabPanel>
            <TabPanel value={1} sx={{ display: "flex" }} >
                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>from</span>
                        <MdFlightTakeoff style={{ fontSize: "40px" }} />
                    </div>
                    <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", marginTop: "-10px", marginBottom: "-10px" }}>
                        <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                    </Select>
                    <div className="switch">
                        <GoArrowSwitch className={isClicked ? "arrows" : ""} style={{ transition: "ease-in-out", transitionDuration: "0.5s", fontSize: "35px", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", color: "white" }} onClick={() => setIsClicked(!isClicked)} />
                    </div></Card>
                <Card className="selectInput ms-3">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>to</span>
                        <MdFlightLand style={{ fontSize: "40px" }} />
                    </div>
                    <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }}>
                        <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                    </Select>
                </Card>
                <Card className="selectInput ms-3  ">
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
            </TabPanel>
            <TabPanel value={2} sx={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                    <Card className="selectInput">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>from</span>
                            <MdFlightTakeoff style={{ fontSize: "40px" }} />
                        </div>
                        <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", marginTop: "-10px", marginBottom: "-10px" }}>
                            <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                        </Select>
                        <div className="switch">
                            <GoArrowSwitch className={isClicked ? "arrows" : ""} style={{ transition: "ease-in-out", transitionDuration: "0.5s", fontSize: "35px", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", color: "white" }} onClick={() => setIsClicked(!isClicked)} />
                        </div></Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>to</span>
                            <MdFlightLand style={{ fontSize: "40px" }} />
                        </div>
                        <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", fontSize: "12px", margin: "-10px 0" }}>
                            <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                        </Select>
                    </Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>trip date</span>
                        </div>
                        <Input type="date" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey", fontSize: "12px" }} />
                    </Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>numbers of passenger</span>
                            <MdGroups style={{ fontSize: "40px" }} />
                        </div>
                        <div style={{ display: "flex", marginBottom: "-17px" }}>
                            <Input type="number" defaultValue="0" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey", width: "min-content", height: "35px" }} />
                            <p style={{ fontSize: "15px", marginTop: "-5px" }}>passengers</p>
                        </div>
                    </Card>
                </div>
                <div style={{ display: "flex", marginTop: "3vh" }}>
                    <Card className="selectInput">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>from</span>
                            <MdFlightTakeoff style={{ fontSize: "40px" }} />
                        </div>
                        <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", marginTop: "-10px", marginBottom: "-10px" }}>
                            <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                        </Select>
                        <div className="switch">
                            <GoArrowSwitch className={isClicked ? "arrows" : ""} style={{ transition: "ease-in-out", transitionDuration: "0.5s", fontSize: "35px", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", color: "white" }} onClick={() => setIsClicked(!isClicked)} />
                        </div></Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>to</span>
                            <MdFlightLand style={{ fontSize: "40px" }} />
                        </div>
                        <Select placeholder="choose trip" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }}>
                            <Option sx={{ fontSize: "12px" }} value="trip1">trip1</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip2">trip2</Option>
                            <Option sx={{ fontSize: "12px" }} value="trip3">trip3</Option>
                        </Select>
                    </Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>trip date</span>
                        </div>
                        <Input type="date" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey" }} />
                    </Card>
                    <Card className="selectInput ms-3">
                        <div className="fromHeader">
                            <span style={{ fontSize: "20px" }}>numbers of passenger</span>
                            <MdGroups style={{ fontSize: "40px" }} />
                        </div>
                        <div style={{ display: "flex", marginBottom: "-17px" }}>
                            <Input type="number" defaultValue="0" sx={{ margin: "-10px 0", backgroundColor: "transparent", border: "none", boxShadow: "none", color: "grey", width: "min-content", height: "35px" }} />
                            <p style={{ fontSize: "15px", marginTop: "-5px" }}>passengers</p>
                        </div>
                    </Card>
                </div>
                <span style={{ color: "#214072", fontWeight: "200", marginTop: "3vh" }}>add city +</span>
            </TabPanel>
        </Tabs>

    )
}
export default SelectTrip