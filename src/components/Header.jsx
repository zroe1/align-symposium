import "./Header.css";
import headerImg from "./symposium.jpg";
import mobileHeaderImg from "./mobile_symposium.jpg";

const Header = () => {
  return (
    <header className="header-container">
      <img src={headerImg} alt="Symposium" className="header-img" id="header-img-desktop" />
      <img src={mobileHeaderImg} alt="Symposium" className="header-img" id="header-img-mobile" />
      <div className="header-text-container">
        <h1 className="header-text">Chicago Symposium on Transforative AI</h1>
        {/* <p className="header-description">
          Join the most promising undergraduate minds in AI safety for an intensive two-day
          exploration of transformative AI. Engage with expert speakers, challenge your assumptions,
          and refine your models of AI's future impact. This symposium aims to inspire rigorous,
          action-oriented thinking in technical safety, governance, and meta-level AI
          considerations.
        </p> */}
        <p className="header-description">
          A intensive, two-day, invitation-only symposium where undergraduates come together to
          think rigorously about what to expect and what needs doing if AI starts the next
          industrial revolution.
        </p>
        <a href="#interest-form" className="header-button">
          Fill out our interest form
        </a>
      </div>
    </header>
  );
};

export default Header;
