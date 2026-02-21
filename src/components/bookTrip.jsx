import React from "react";
import { Button, Card } from "@mui/joy";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import SelectTrip from "./seclectTrip.jsx";
import SelectTour from "./selectTour.jsx";
const BookTrip = () => {
    const Tab = styled(BaseTab)`
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
        background-color: transparent;
        width:fit-content;
        margin:5px;
        padding: 10px 12px;
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
        }
      
        &.${buttonClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
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
        `,
    );
    return (
        <>
            <Card className="BookTripCard">
                <Tabs defaultValue={0}>
                    <TabsList>
                        <Tab value={0}>Trips</Tab>
                        <Tab value={1}>Tours</Tab>
                        <Tab value={2}>Hotels</Tab>
                    </TabsList>
                    <TabPanel sx={{ all: "revert" }} value={0}>
                        <SelectTrip />
                    </TabPanel>
                    <TabPanel sx={{ all: "revert" }} value={1}>
                        <SelectTour />
                    </TabPanel>
                    <TabPanel sx={{ all: "revert" }} value={2}>
                        <SelectTour />
                    </TabPanel>
                </Tabs>
                <Button className="searchToBook">
                    Search
                </Button>
            </Card>

        </>
    )
}
export default BookTrip