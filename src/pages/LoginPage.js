import LoginImage from '../assets/login.png';
import './LoginPage.css';
import Logo from '../assets/mass-logo.png';
// Path: src/pages/LoginPage.js

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="relative w-100 h-100 d-flex flex-col">
                <div className="login-page__container__left">
                    <img src={LoginImage} alt="login" />
                </div>
                <div className="login-page__container__right">
                    <div className="w-100">
                        <img src={Logo} alt="logo" className="w-100 h-100" />
                    </div>
                    <div className="d-flex align-items-center flex-column h-max w-max">
                        <div className="mb-auto p-2">
                            <h2 className="text-light">Sign In</h2>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form className="login-page__container__right__form">
                                    <div className="form-outline mb-4">
                                        <input type="email" id="loginName" className="form-control" />
                                        <label className="form-label text-light" for="loginName">Email or username</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="loginPassword" className="form-control" />
                                        <label className="form-label text-light" for="loginPassword">Password</label>
                                    </div>
                                    <div className="mb-auto p-2 w-100">
                                        <button type="submit" className="btn btn-primary rounded text-light">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
