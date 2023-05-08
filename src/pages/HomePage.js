import CommonImage from "../components/CommonImage";
import AboutImage from '../assets/about_us_img.jpeg';
import HistoryImage from "../assets/history-masspirg.jpeg";
import RenewableImage from "../assets/RenewableEnergy-Masspirg.jpeg";
import LoansImage from "../assets/Loans-Masspirg.jpeg";
import VotingImage from "../assets/Voting-Masspirg.jpeg";
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

        <div className="container mt-5 mb-5">
            <div className="row bgJoin px-4 py-4">
                <div className="col-6 py-4 d-flex align-items-center">
                    <img src={HistoryImage} className="img-fluid my-2" alt="Responsive image"></img>
                </div>
                <div className="col-6">
                    <h1 className="my-4 mx-4 aboutText">History</h1>
                    <p className="my-4 mx-4">
                        Students have the power to shape the future we will inherit. We work with professional staff at colleges and universities to make sure our peers have the skills, opportunities and training they need to create a better, more sustainable future for all of us. Our chapters provide the training, professional support and resources students need to tackle climate change, protect public health, revitalize our democracy, feed the hungry and more. Students have been at the forefront of social change throughout history, from civil rights, to voting rights to protecting the environment. For nearly 50 years we’ve helped students to get organized, mobilized and energized so they can continue to be on the cutting edge of positive change.
                    </p>
                </div>
            </div>
        </div>

        <div className="container bgAbout">
            <div className="row px-4 py-4">
                <div className="col-6">
                    <h1 className="my-4 mx-4 aboutText">Successes</h1>
                </div>
            </div>
            <div className="container">
                <div className="row bgAbout px-3 py-0">
                    <div className="col-6">
                        <h3 className="h3 my-3 mx-4 aboutText ">Transitioning to Renewable Energy</h3>
                        <p className="my-4 mx-4">
                        We work to eliminate our dependence on fossil fuels and reverse the worst impacts of climate change. In 2008, we helped to pass the Global Warming Solutions Act in MA which helped us set goals to reduce our carbon emissions which we’re on track to hit. We launched our 100% renewable energy campaign back in 2016 and within 5 months, our chapter at Salem State successfully passed a resolution through the city council, making Salem the first city in MA to commit to 100% renewable energy. Since then 14 other cities and towns have made similar commitments and we’re advocating at the statewide level to make sure MA commits to a goal of 100% renewable energy. And in April 2022, we won our campaign to get UMass Amherst committed to 100% renewable energy by 2032.
                        </p>
                    </div>
                    <div className="col-6 py-4 d-flex align-items-center">
                        <img src={RenewableImage} className="img-fluid my-2" alt="Responsive image"></img>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row bgAbout px-3 py-0">
                    <div className="col-6 py-4 px-5 d-flex  align-items-center">
                        <img src={LoansImage} className="img-fluid my-2" alt="Responsive image"></img>
                    </div>
                    <div className="col-6">
                        <h3 className="h3 my-3 mx-4 aboutText ">Advocating for Student Loan Borrower Rights</h3>
                        <p className="my-4 mx-4">
                        In January 2021, Our advocacy and organizing efforts resulted in the passage of the Student Loan Borrower Bill of Rights, which will protect the 855,500 students who have had to take out loans to pay for college from unfair and deceptive lending practices by loan servicing companies. Our professional staff advocates and student leaders testified on Beacon Hill each time this bill came up for discussion. In the final weeks of the legislative session, we delivered letters signed by over 100 student leaders from across campuses in MA to the key decision-makers, including Governor Baker, to get this bill over the finish line.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row bgAbout px-3 py-0">
                    <div className="col-6 mb-4">
                        <h3 className="h3 my-3 mx-4 aboutText ">Advocating for Student Loan Borrower Rights</h3>
                        <p className="my-4 mx-4">
                        We work to mobilize the youth vote during elections. In the last 15 years, MASSPIRG volunteers have helped to register over 45,000 students to vote. In the most recent midterm elections of 2018 our efforts resulted in a 55% – 85% increase in turnout since the 2014 midterm elections at the student-heavy polling locations. Even in 2020, when we were required to adapt all of our organizing efforts to be virtual rather than in person due to the pandemic, we were still able to make 50,000 youth voter contacts and recruited, trained, and mobilized over 400 student volunteers to participate in this campaign. This contributed to the historic youth voter turnout across the country.
                        </p>
                    </div>
                    <div className="col-6 py-4 d-flex align-items-center">
                        <img src={VotingImage} className="img-fluid my-2" alt="Responsive image"></img>
                    </div>
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