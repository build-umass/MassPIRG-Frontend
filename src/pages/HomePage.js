import CommonImage from "../components/CommonImage";
import AboutImage from '../assets/about_us_img.jpeg';
import './Homepage.css';

const HomePage = () => {
    return <>
        <CommonImage />
        <div>

        </div>
        <div className="container">
            <div className="row bgAbout px-4 py-4">
                <div className="col-6">
                    <h1 className="my-4 mx-4 aboutText">About us</h1>
                    <p className="my-4 mx-4">
                        The UMass Amherst MASSPIRG Chapter began in 1972. We are one of the oldest PIRG chapters in the country. For over 50 years, we’ve been organizing students on our campus to play an active role in making our society a better place by running local, statewide, and national campaigns on issues that affect us as students and citizens.
                    </p>
                </div>
                <div className="col-6 py-4">
                    <img src={AboutImage} className="img-fluid my-2" alt="Responsive image"></img>
                </div>
            </div>

        </div>

        <div className="container my-4">
            <div className="row bgJoin py-4 px-4">
                <div>
                    <h1 className="my-4 mx-4 joinText">Join us</h1>
                    <p className="my-4 mx-4">
                        We are always looking for new members to join our team. If you are interested in joining us, please fill out <a className="linkText" href="https://forms.gle/8sJtqmEsXoTfhsRu6">this form</a> and we will get back to you as soon as possible.
                    </p>
                </div>
            </div>

        </div>
    </>
}

export default HomePage;