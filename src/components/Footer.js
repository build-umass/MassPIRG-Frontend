import './Footer.css';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return <footer>
    <div id="social-icons">
      <div className="icon">
        {/* <a href="https://instagram.com/your_account">
          <img src="https://path_to_your_icon/instagram_icon.png" alt="Instagram Icon" />
        </a> */}
        <SocialIcon url="https://www.instagram.com/umamasspirg" />
      </div>
      <div className="icon">
        {/* <a href="https://tiktok.com/@your_account">
          <img src="https://path_to_your_icon/tiktok_icon.png" alt="Tiktok Icon" />
        </a> */}
        <SocialIcon url="https://www.tiktok.com/@umamasspirg" />
      </div>
      <div className="icon">
        <SocialIcon url="https://twitter.com/umamasspirg" />
      </div>
      <div className="icon">
        {/* <a href="https://facebook.com/your_account">
          <img src="https://path_to_your_icon/facebook_icon.png" alt="Facebook Icon"/>
        </a> */}
        <SocialIcon url="https://www.facebook.com/UMASSPIRG" />
      </div>
    </div>
  </footer>
}

export default Footer;
