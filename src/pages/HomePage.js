import CommonImage from "../components/CommonImage";
import AboutImage from '../assets/about_us_img.jpeg';
import './Homepage.css';

const HomePage = () => {
    return <>
        <CommonImage />
        <div>

        </div>
        <div className="container">
            <div className="row bgAbout">
                <div className="col-6">
                    <h1 className="my-4 mx-4 aboutText">About us</h1>
                    <p className="my-4 mx-4">
                        The UMass Amherst MASSPIRG Chapter began in 1972. We are one of the oldest PIRG chapters in the country. For over 50 years, we’ve been organizing students on our campus to play an active role in making our society a better place by running local, statewide, and national campaigns on issues that affect us as students and citizens.
                    </p>
                </div>
                <div className="col-6">
                    <img src={AboutImage} className="img-fluid py-4" alt="Responsive image"></img>
                </div>
            </div>

        </div>

        <div className="container my-4">
            <div className="row bgJoin">
                <div className="col-6">
                    <h1 className="my-4 mx-4 joinText">Join us</h1>
                </div>
            </div>

        </div>
    </>
}

export default HomePage;