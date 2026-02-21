import secImg1 from "../images/_The Annapurna Range In The Himalayas__ by Stocksy Contributor _Shikhar Bhattarai_.jpg"
import secImg2 from "../images/GettyImages-1160384397_55_660x440.webp"
import secImg3 from "../images/galaxy_on_a_stick_desktop_wallpaper_by_nebuladarling_dg0v45r.jpg"
const Sections = () => {

    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", width: "fit-content", margin: "50px auto 0" }}>Sections</h4>
            <div className="sections">
                <div className="sectionCard">
                    <img src={secImg1} alt="img" />
                    <div className="secCardDetails">
                        <h3>section title</h3>
                        <span>section description</span>
                        <h5>this section contains the following categories :</h5>
                        <ul>
                            <li>category 1</li>
                            <li>category 2</li>
                            <li>category 3</li>
                        </ul>
                    </div>
                </div>

                <div className="sectionCard">
                    <img src={secImg2} alt="img" />
                    <div className="secCardDetails">
                        <h3>section title</h3>
                        <span>section description</span>
                        <h5>this section contains the following categories :</h5>
                        <ul>
                            <li>category 1</li>
                            <li>category 2</li>
                            <li>category 3</li>
                        </ul>
                    </div>
                </div>


                <div className="sectionCard">
                    <img src={secImg3} alt="img" height={200} />
                    <div className="secCardDetails">
                        <h3>section title</h3>
                        <span>section description</span>
                        <h5>this section contains the following categories :</h5>
                        <ul>
                            <li>category 1</li>
                            <li>category 2</li>
                            <li>category 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sections