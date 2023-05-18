import "./MainNavigation.css";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
const MainNavigation = () => {
    const signOut = useSignOut();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const isLoggedIn = isAuthenticated();
    const logout = () => {
        signOut();
        navigate('/');
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-nav">
                <div className="container-fluid row">
                    <a className="navbar-brand justify-content-center d-flex col-4" href="/">
                        <div>
                            <div className="text-white nav-text-font">UMass</div>
                            <div className="text-nav nav-text-font">Pirg</div>
                        </div>
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <div className="collapse navbar-collapse justify-content-center col-8" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                            <li className="nav-item mx-3">
                                <a className="text-white nav-text-font-options" href="/campaigns">Our Campaigns</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white nav-text-font-options" href="/our-team">Who We Are</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white nav-text-font-options" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Get Involved</a>
                            </li>
                        </ul>
                        {isLoggedIn && <button onClick={logout} className="btn btn-danger">Logout</button>}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainNavigation;