import React, { useEffect, useRef } from "react";
import "./Speakers.css";
import michaelAird from "./michael_aird.png";
import victor from "./victor.jpg";
import ross from "./ross.jpeg";
import thomas from "./thomas.jpeg";
import jonas from "./jonas.jpeg";
import daniel from "./daniel.jpg";
import charlie from "./charlie.jpg";

const Speakers = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="speakers-container">
      <h2 className="speakers-title fade-element">Confirmed Speakers</h2>
      <div className="speakers-divider-container fade-element">
        <div className="speakers-divider"></div>
      </div>

      <div className="speakers-grid">
        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={michaelAird} alt="Michael Aird" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Michael Aird</h3>
              {/* <p className="speaker-role">Keynote Speaker</p> */}
              <p className="speaker-affiliation">RAND Corporation</p>
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={victor} alt="Victor Veitch" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Victor Veitch</h3>
              {/* <p className="speaker-role">Keynote Speaker</p> */}
              <p className="speaker-affiliation">University of Chicago / DeepMind</p>
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={ross} alt="Ross Nordby" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Ross Nordby</h3>
              {/* <p className="speaker-role">Keynote Speaker</p> */}
              <p className="speaker-affiliation">Anthropic</p>
              <p className="speaker-note">Interactive scenario forecasting & timeline debate</p>
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={charlie} alt="Charlie Bullock" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Charlie Bullock</h3>
              {/* <p className="speaker-role">Keynote Speaker</p> */}
              <p className="speaker-affiliation">LawAI</p>
              {/* <p className="speaker-note">Interactive scenario forecasting & timeline debate</p> */}
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={thomas} alt="Thomas Larsen" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Thomas Larsen</h3>
              {/* <p className="speaker-role">Keynote Speaker</p> */}
              <p className="speaker-affiliation">AI Futures Project</p>
              <p className="speaker-note">wargame simulation</p>
            </div>
          </div>
        </div>

        {/* <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={jonas} alt="Jonas Vollmer" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Jonas Vollmer*</h3>

              <p className="speaker-affiliation">AI Futures Project</p>
              <p className="speaker-note">wargame simulation</p>
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element">
          <div className="speaker-content">
            <div className="speaker-image-container">
              <img src={daniel} alt="Daniel Kokotajlo" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Daniel Kokotajlo*</h3>

              <p className="speaker-affiliation">AI Futures Project</p>
              <p className="speaker-note">wargame simulation</p>
            </div>
          </div>
        </div> */}

        {/* <div className="speaker-card fade-element workshop-card">
          <div className="workshop-content">
            <h3 className="workshop-title">Workshop Facilitators</h3>
            <div className="facilitator-info">
              <p className="facilitator-names">Thomas Larsen / Jonas Vollmer</p>
              <p className="facilitator-affiliations">
                Center for AI Policy / Center for Effective Altruism
              </p>
            </div>
            <p className="workshop-note">Workshop details to be announced</p>
          </div>
        </div> */}
      </div>

      <div className="speakers-note fade-element">
        {/* <p>*At least one of Thomas Larsen, Jonas Vollmer, and/or Daniel Kokotajlo will attend</p> */}
        {/* <p>More speakers to be announced soon</p> */}
      </div>
    </div>
  );
};

export default Speakers;
