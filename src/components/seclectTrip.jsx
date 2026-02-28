import { Button, Card, Input, Option, Select, TabPanel } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import { CiLocationOn } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";


const SelectTrip = () => {
const today = new Date().getDay()
console.log(today);

    return (

<Tabs aria-label="tabs" className="selectTrip"  size="sm" defaultValue={0} /* sx={{ bgcolor: 'transparent',  display: 'flex' , flexDirection: "row",justifyContent: "center", alignItems: "center", gap: "20px" }} */>
                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>location</span>
                        <CiLocationOn style={{ fontSize: "25px" ,  color: "rgba(128, 128, 128, 0.705)" }} />
                    </div>
                    <Select placeholder="choose" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }}>
                        <Option sx={{ fontSize: "12px" }} value="trip1">location 1</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip2">location 2</Option>
                        <Option sx={{ fontSize: "12px" }} value="trip3">location 3</Option>
                    </Select>
                </Card>

                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>check in</span>
                    </div>
                   <Input type="date" endDecorator={<CiCalendar style={{fontSize:"20px"}}/>}  slotProps={{
    input: {
      sx: {
        '&::-webkit-calendar-picker-indicator': {
          display: 'none', // Hide the native icon
        },
      },
    },
  }}  sx={{ color: "rgba(128, 128, 128, 0.705)", backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }} />
                   
                   
                </Card>

                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>check out</span>
                    </div>
                   <Input type="date" endDecorator={<CiCalendar style={{fontSize:"20px"}}/>}  slotProps={{
    input: {
      sx: {
        '&::-webkit-calendar-picker-indicator': {
          display: 'none', // Hide the native icon
        },
      },
    },
  }} sx={{ color: "rgba(128, 128, 128, 0.705)", backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }} />
                </Card>

                <Card className="selectInput">
                    <div className="fromHeader">
                        <span style={{ fontSize: "20px" }}>Guests</span>
                   <IoPerson style={{ fontSize: "25px" ,  color: "rgba(128, 128, 128, 0.705)" }}/>
                    </div>
                   <Input type="text" placeholder="guests" sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none", margin: "-10px 0" }} />
                </Card>
            <Button className="searchToBook">
                    Search
                </Button>            
        
        </Tabs>

    )
}
export default SelectTrip