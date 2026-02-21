import secImg1 from "../images/canada.jpg"
import secImg2 from "../images/switzerland.jpg"
import secImg3 from "../images/Cairo-Egypt.jpg"
const Categories = () => {

    return (
        <>
            <h4 style={{ borderBottom: "3px solid #2f60ae", width: "fit-content", margin: "50px auto 0" }}>Categories</h4>
            <div className="Categories">
                <div className="categoryCard">
                    <img src={secImg1} alt="img" />
                    <div className="secCardDetails">
                        <h3>category title</h3>
                        <span>category description</span>
                        <h5>this category contains the following trips :</h5>
                        <ul>
                            <li>trip 1</li>
                            <li>trip 2</li>
                            <li>trip 3</li>
                        </ul>
                    </div>
                </div>

                <div className="categoryCard">
                    <img src={secImg2} alt="img" />
                    <div className="secCardDetails">
                        <h3>category title</h3>
                        <span>category description</span>
                        <h5>this category contains the following trips :</h5>
                        <ul>
                            <li>trip 1</li>
                            <li>trip 2</li>
                            <li>trip 3</li>
                        </ul>
                    </div>
                </div>


                <div className="categoryCard">
                    <img src={secImg3} alt="img" height={200} />
                    <div className="secCardDetails">
                        <h3>category title</h3>
                        <span>category description</span>
                        <h5>this category contains the following trips :</h5>
                        <ul>
                            <li>trip 1</li>
                            <li>trip 2</li>
                            <li>trip 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Categories