import "./Header.css";
import headerImg from "./symposium.jpg";
import mobileHeaderImg from "./mobile_symposium.jpg";
import smallerMobileHeaderImg from "./smaller_mobile_symposium.jpg";

const Header = () => {
  return (
    <header className="header-container">
      <img src={headerImg} alt="Symposium" className="header-img" id="header-img-desktop" />
      <img src={mobileHeaderImg} alt="Symposium" className="header-img" id="header-img-mobile" />
      <img
        src={smallerMobileHeaderImg}
        alt="Symposium"
        className="header-img"
        id="smaller-header-img-mobile"
      />
      <div className="header-text-container">
        <h1 className="header-text">Chicago Symposium on Transformative AI</h1>
        <p className="header-description">
          An intensive, two-day symposium where undergraduates come together to think rigorously
          about what to expect and what needs doing if AI starts the next industrial revolution.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5f0PaFaeFQs9BfyLH3SbaGPg7F_RTT5t-HCiy8xMUA33q6A/viewform?usp=sharing"
          className="header-button">
          Applications Due Feb 20, 2025
        </a>
      </div>
    </header>
  );
};

export default Header;
