import CommonImage from "../components/CommonImage";
import '../components/AllCampaigns.css';

const AllCampaigns = () => {
    return <>
        <CommonImage />
        <div className="container">
            <h1 className="d-flex justify-content-center">Current Campaigns</h1>
            <div className="row gx-5">
                <div className="col campaign">
                    <div className="card" style={{height: 200}}>
                        <div className="card-body">
                            <h5 className="card-title card-text">New Voters Project</h5>
                            <p className="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" className="card-hover-text">
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col campaign">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title card-text">New Voters Project</h5>
                            <p className="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" className="card-hover-text">
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col campaign">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title card-text">New Voters Project</h5>
                            <p className="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" className="card-hover-text">
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AllCampaigns;