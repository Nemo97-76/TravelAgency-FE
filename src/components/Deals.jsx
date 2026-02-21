import React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import HotelsTab from "./hotels.tab.jsx";
import ToursTab from "./Tours.tab.jsx";
import SpaceTab from "./Space.tab.jsx";
import EventsTab from "./events.tab.jsx";
const Deals = () => {
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
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-between;
        margin:2.5vh auto ;
        `,
    );
    return (
        <>
            <div style={{ margin: "0 auto 10vh" }}>
                <h4 style={{ borderBottom: "3px solid #2f60ae", paddingBottom: "10px", width: "fit-content", margin: "auto" }}>Explore our hot deals</h4>
                <Tabs defaultValue={0}>
                    <TabsList>
                        <Tab value={0}>Hotels</Tab>
                        <Tab value={1}>Tours</Tab>
                        <Tab value={2}>space</Tab>
                        <Tab value={3}>events</Tab>
                    </TabsList>
                    <TabPanel sx={{ all: "revert" }} value={0}>
                        <HotelsTab />
                    </TabPanel>
                    <TabPanel sx={{ all: "revert" }} value={1}>
                        <ToursTab />
                    </TabPanel>
                    <TabPanel sx={{ all: "revert" }} value={2}>
                        <SpaceTab />
                    </TabPanel>
                    <TabPanel sx={{ all: "revert" }} value={3}>
                        <EventsTab />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}
export default Deals