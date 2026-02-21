import React from "react"
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import cardImg1 from "../images/Everest Base Camp Trek.jpg"
import cardImg2 from "../images/Darjeeling.jpg"
import cardImg3 from "../images/Pelling.jpg"
import cardImg4 from "../images/5 Day Phuket Thailand Itinerary - Guide To Things To Do.jpg"
import cardImg5 from "../images/Andaman Nicobar Tourism.jpg"
import cardImg6 from "../images/Monument Valley.jpg"
const Destinations = () => {
    const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    background-color: transparent;
    width:fit-content;
    margin:5px;
    padding:10px 12px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: transparent;
    }
  
    &:focus {
      color: #fff;
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: #739fce;
    }`;
    const TabPanel = styled(BaseTabPanel)(
        ({ theme }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 20px 12px;
    border-radius: 12px;
    opacity: 0.6;
    `,
    );
    const TabsList = styled(BaseTabsList)(
        ({ theme }) => `
    width:fit-content;
    background-color: #739fce;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin:2.5vh auto ;
   
    `,
    ); return (
        <div style={{ margin: "0 auto 20vh" }}>
            <h4 style={{ borderBottom: "3px solid #2f60ae", paddingBottom: "10px", width: "fit-content", margin: "auto" }}>Destinations for you</h4>
            <Tabs defaultValue={0}>
                <TabsList>
                    <Tab value={0}>Nepal</Tab>
                    <Tab value={1}>Malaysia</Tab>
                    <Tab value={2}>indonesia</Tab>
                    <Tab value={3}>turkey</Tab>
                </TabsList>
                <TabPanel sx={{ all: "revert", width: "80%", margin: "auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px" }} value={0}>
                    <div className="mountain-card" style={{ gridArea: 1 / 1 / 2 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg1}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 2 / 2 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg2}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 3 / 2 / 4 }}>
                        <img
                            alt="img"
                            src={cardImg3}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 1 / 3 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg4}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 2 / 3 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg5}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 3 / 3 / 4 }}>
                        <img
                            alt="img"
                            src={cardImg6}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel sx={{ all: "revert", width: "80%", margin: "auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px" }} value={1}>
                    <div className="mountain-card" style={{ gridArea: 1 / 1 / 2 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg1}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 2 / 2 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg2}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 3 / 2 / 4 }}>
                        <img
                            alt="img"
                            src={cardImg3}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 1 / 3 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg4}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 2 / 3 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg5}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel sx={{ all: "revert", width: "80%", margin: "auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px" }} value={2}>
                    <div className="mountain-card" style={{ gridArea: 1 / 1 / 2 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg1}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 2 / 2 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg2}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 3 / 2 / 4 }}>
                        <img
                            alt="img"
                            src={cardImg3}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 2 / 1 / 3 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg4}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel sx={{ all: "revert", width: "80%", margin: "auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr", gap: "10px" }} value={3}>
                    <div className="mountain-card" style={{ gridArea: 1 / 1 / 2 / 2 }}>
                        <img
                            alt="img"
                            src={cardImg1}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 2 / 2 / 3 }}>
                        <img
                            alt="img"
                            src={cardImg2}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>
                    <div className="mountain-card" style={{ gridArea: 1 / 3 / 2 / 4 }}>
                        <img
                            alt="img"
                            src={cardImg3}
                            className="mountain-image"
                        />
                        <div className="mountain-content">
                            <p>Everest Trek to Base Camp</p>
                            <p>Price starts at $105.00</p>
                        </div>
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    )
}
export default Destinations