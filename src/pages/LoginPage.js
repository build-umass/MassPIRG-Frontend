import LoginImage from '../assets/login.png';
import './LoginPage.css';
import Logo from '../assets/mass-logo.png';
// Path: src/pages/LoginPage.js

const LoginPage = () => {
    return (
        <div className="login-page">
            <div class="relative w-100 h-100 d-flex flex-col">
                <div className="login-page__container__left">
                    <img src={LoginImage} alt="login" />
                </div>
                <div className="login-page__container__right">
                    <div class="w-100">
                        <img src={Logo} alt="logo" class="w-100 h-100" />
                    </div>
                    <div class="d-flex align-items-center flex-column h-max w-max">
                        <div class="mb-auto p-2">
                            <h2 class="text-light">Sign In</h2>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form className="login-page__container__right__form">
                                    <div class="form-outline mb-4">
                                        <input type="email" id="loginName" class="form-control" />
                                        <label class="form-label text-light" for="loginName">Email or username</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="loginPassword" class="form-control" />
                                        <label class="form-label text-light" for="loginPassword">Password</label>
                                    </div>
                                    <div class="mb-auto p-2 w-100">
                                        <button type="submit" class="btn btn-primary rounded text-light">Sign In</button>
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
