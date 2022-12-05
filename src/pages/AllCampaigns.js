import CommonImage from "../components/CommonImage";
import '../components/AllCampaigns.css';

const AllCampaigns = () => {
    return <>
        <CommonImage />
        <div className="container">
            <h1 className="d-flex justify-content-center mb-3">Current Campaigns</h1>
            <div className="row justify-content-center gx-5">
                <div className="col-3 campaign">
                    <div className="card" style={{height: 400}}>
                        <div className="card-body d-flex align-items-center">
                            <h5 className="card-title card-text display-5">New Voters Project</h5>
                            <span className="card-hover-text">
                            <p>
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#">
                                Click to Learn More
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-3 campaign">
                    <div className="card" style={{height: 400}}>
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <h5 className="card-title card-text display-5">100% Renewable Energy</h5>
                            <span className="card-hover-text">
                            <p>
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#">
                                Click to Learn More
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-3 campaign">
                    <div className="card" style={{height: 400}}>
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <h5 className="card-title card-text display-5">Make More Textbooks Affordable</h5>
                            <span className="card-hover-text">
                            <p>
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#">
                                Click to Learn More
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col text-center mt-3">
                <a className="btn btn-primary involved strong" href="/#" role="button">Centered button</a>
            </div>
        </div>
    </>
}

export default AllCampaigns;