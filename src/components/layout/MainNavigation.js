import "./MainNavigation.css";
const MainNavigation = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <div className="text-white">UMass</div>
                        <div className="text-success">Pirg</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Our Campaigns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/our-team">Who We Are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Get Involved</a>
                            </li>
                        </ul>
                    </div>
            </div>
            </nav>
        </header>
    );
}

export default MainNavigation;