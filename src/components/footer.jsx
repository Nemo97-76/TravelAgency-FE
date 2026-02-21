import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { RiVisaLine } from "react-icons/ri";
import { TbBrandPaypalFilled } from "react-icons/tb";
import { SiMastercard } from "react-icons/si";
import { SiJcb } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const x = useNavigate()
    const currentYear = new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <div className="innerFooter">
                    <div className="footerCol" style={{ gridArea: 1 / 1 / 4 / 3 }}>
                        <h6 style={{ fontWeight: "400" }}>contact us</h6>
                        <div className="col1div1">
                            <p>call 24/7 for help</p>
                            <p>+00 123 456 789</p>
                        </div>

                        <div className="col1div2">
                            <p>mail to our support team</p>
                            <p>support@domain.com</p>
                        </div>

                        <div className="col1div3">
                            <p>follow us on</p>
                            <p>
                                <CiFacebook />{" "}<FaGithub onClick={() => window.location.replace("https://github.com/Nemo97-76")} />{" "}<CiInstagram />{" "}<CiLinkedin onClick={() => window.location.replace("https://www.linkedin.com/in/tasneem-youssef-770708278/")} />
                            </p>
                        </div>
                    </div>
                    <div className="footerCol" style={{ gridArea: 1 / 3 / 4 / 4 }}>
                        <h6 style={{ fontWeight: "400" }}>company</h6>
                        <p>About us</p>
                        <p>Testimonials</p>
                        <p>Rewards</p>
                        <p>work with us</p>
                        <p>meet the team</p>
                        <p>Blog</p>
                    </div>
                    <div className="footerCol" style={{ gridArea: 1 / 4 / 4 / 5, }}>
                        <h6 style={{ fontWeight: "400" }}>support</h6>
                        <p>Account</p>
                        <p>FAQ</p>
                        <p>legal</p>
                        <p>contact</p>
                        <p>affiliate program</p>
                        <p>privacy</p>
                    </div>
                    <div className="footerCol" style={{ gridArea: 1 / 5 / 4 / 6, }}>
                        <h6 style={{ fontWeight: "400" }}>other serivces</h6>
                        <p>community program</p>
                        <p>investor relations</p>
                        <p>Rewards program</p>
                        <p>pointsPLUS</p>
                        <p>partners</p>
                        <p>list my hotel</p>
                    </div>
                    <div className="footerCol" style={{ gridArea: 1 / 6 / 4 / 7, }}>
                        <h6 style={{ fontWeight: "400" }}>top cities</h6>
                        <p onClick={() => x("/destinations")}>chicago</p>
                        <p onClick={() => x("/destinations")}>new york</p>
                        <p onClick={() => x("/destinations")}>san francisco</p>
                        <p onClick={() => x("/destinations")}>california</p>
                        <p onClick={() => x("/destinations")}>ohio</p>
                        <p onClick={() => x("/destinations")}>alaska</p>
                    </div>
                </div>

                <div className="finalfooter">
                    <div className="inner">
                        <span>Copyright © {currentYear} All Rights Reserved</span>
                        <div className="payMethods d-flex">
                            <RiVisaLine fontSize={25} /> <TbBrandPaypalFilled fontSize={25} /><SiMastercard fontSize={25} /><SiJcb fontSize={25} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer