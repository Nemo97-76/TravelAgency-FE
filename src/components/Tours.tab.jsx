import React from "react";
import hotel1 from "../images/Hotel Nikko San Francisco — Hotel Review _ Condé Nast Traveler.jpg"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import hotel2 from "../images/The Serafina Beach Hotel Celebrates the Sand and Surf Culture of San Juan, Puerto Rico.jpg"
import hotel3 from "../images/Matteo Thun draws on Czech art heritage for design of The Julius Prague.jpg"
import hotel4 from "../images/W Abu Dhabi – Yas Island – Super Grand Prix Hotel.jpg"
import hotel5 from "../images/Hotel Review_ Courtyard by Marriott Singapore Novena (Premier Skyline Room) — The Shutterwhale.jpg"
import hotel6 from "../images/The Sanya EDITION.jpg"
const ToursTab = () => {
    return (
        <>
            <div className="TourTab"  >
                <Card variant="outlined" sx={{ width: "100%", gridArea: "1/1/3/2" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel1}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>
                        <div className="discountBadge">
                            <span>50%</span>
                        </div>
                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>Kantua hotel, Thailand</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$90.00</span></span>
                    </CardContent>

                </Card>

                <Card variant="outlined" sx={{ width: "100%", gridArea: "1/2/3/3" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel2}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>

                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>Hotel paradise international</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$96.00</span></span>
                    </CardContent>

                </Card>

                <Card variant="outlined" sx={{ width: "100%", gridArea: "1/3/3/4" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel3}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>Hotel kualalampur</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$79.00</span></span>
                    </CardContent>

                </Card>

                <Card variant="outlined" sx={{ width: "100%", gridArea: "1/4/3/5" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel4}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>
                        <div className="discountBadge">
                            <span>20%</span>
                        </div>
                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>hotel deluxe</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$90.00</span></span>
                    </CardContent>

                </Card>

                <Card variant="outlined" sx={{ width: "100%", gridArea: "3/1/5/2" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel5}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>hotel rajavumi</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$49.00</span></span>
                    </CardContent>

                </Card>

                <Card variant="outlined" sx={{ width: "100%", gridArea: "3/2/5/3" }} className="HotelCard">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={hotel6}
                                loading="lazy"
                                alt="hotel"
                                calssName="HotelImg"
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <span style={{ fontSize: "18px", fontWeight: "500" }}>Thailand grand suit</span>
                        <span style={{ fontWeight: "100", fontSize: "0.8rem", color: "purple" }}>4.8/5 Excellent <span style={{ color: "GrayText" }}>(1214 reviewes)</span></span>
                        <span style={{ fontSize: "0.8rem" }}>Price starts from <span style={{ fontSize: "20px", fontWeight: "600" }}>$90.00</span></span>
                    </CardContent>

                </Card>

            </div>
        </>
    )
}
export default ToursTab