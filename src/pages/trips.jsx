import secImg1 from "../images/TrovaTrip-Bali-Woman-Looking-Over-Ocean.webp"
import secImg2 from "../images/Views_of_Mount_Fuji_from_Ōwakudani_20211202.jpg"
import secImg3 from "../images/kyoto.jpg"
const Trips = () => {

    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", width: "fit-content", margin: "50px auto 0" }}>Trips</h4>
            <div className="Trips">
                <div className="tripCard">
                    <img src={secImg1} alt="img" />
                    <div className="secCardDetails">
                        <h3>trip title</h3>
                        <span>trip description</span>

                    </div>
                </div>

                <div className="tripCard">
                    <img src={secImg2} alt="img" />
                    <div className="secCardDetails">
                        <h3>trip title</h3>
                        <span>trip description</span>

                    </div>
                </div>


                <div className="tripCard">
                    <img src={secImg3} alt="img" height={200} />
                    <div className="secCardDetails">
                        <h3>trip title</h3>
                        <span>trip description</span>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Trips

