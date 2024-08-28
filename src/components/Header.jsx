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
        <h1 className="header-text">Chicago Symposium on Transforative AI</h1>
        <p className="header-description">
          An intensive, two-day symposium where undergraduates come together to think rigorously
          about what to expect and what needs doing if AI starts the next industrial revolution.
        </p>
        <a href="https://forms.gle/effWSChju3fvCmAy9" className="header-button">
          Fill out our interest form
        </a>
      </div>
    </header>
  );
};

export default Header;
