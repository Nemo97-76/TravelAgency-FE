import React from "react";
import BookTrip from "../components/bookTrip.jsx";
import Intro from "../components/intro.jsx";
import Grid from "../components/Grid.jsx";
import Deals from "../components/Deals.jsx";
import { Button, Card } from "@mui/joy";
import Slider from "../components/slider.jsx";
import Destinations from "../components/destinations.jsx";
import MailSubScribtion from "../components/Mailsubscribtion.jsx";
import News from "../components/travel news.jsx";
const Home = () => {
    return (
        <>
            <BookTrip />

            <Intro />

            <Grid />

            <Deals />

            <div className="trioCardParent">
                <Card className="trioCard1 triocard">
                    <div className="cardContent">
                        <h5>special Offers</h5>
                        <span>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet.</span><br />
                        <Button className="HolidayBTN">holiady Deals</Button>
                    </div>
                </Card>
                <Card className="trioCard2 triocard">
                    <div className="cardContent">
                        <h5 style={{ color: "black" }}>news letter</h5>
                        <span style={{ color: "black" }}>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span><br />
                        <a style={{ textDecoration: "none", color: "white" }} href="#Mail-Subscribtion">
                            <Button className="HolidayBTN" >
                                subscribe now
                            </Button>
                        </a>
                    </div>
                </Card>
                <Card className="trioCard3 triocard">
                    <div className="cardContent">
                        <h5>travel tips</h5>
                        <span>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span><br />
                        <Button className="HolidayBTN">get tips</Button>
                    </div>
                </Card>
            </div>

            <Slider />

            <Destinations />

            <News />

            <MailSubScribtion />



        </>
    )
}
export default Home