import CommonImage from "../components/CommonImage";
import '../components/AllCampaigns.css';

const AllCampaigns = () => {
    return <>
        <CommonImage />
        <h1>Current Campaigns</h1>
        <div class="container">
            <div class="row gx-5">
                <div class="col campaign">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title card-text">New Voters Project</h5>
                            <p class="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" class="card-hover-text">
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col campaign">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title card-text">New Voters Project</h5>
                            <p class="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" class="card-hover-text">
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col campaign">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title card-text">New Voters Project</h5>
                            <p class="card-hover-text">
                                We Helped Contact Over 50,000 Students To Help Them Vote And Inform Them About What
                                Is On The Ballot In A Non-Partisan Way
                            </p>
                            <a href="/#" class="card-hover-text">
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