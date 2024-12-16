import React, { useEffect, useRef } from "react";
import "./Speakers.css";
import michaelAird from "./michael_aird.png";

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
      <h2 className="speakers-title fade-element">Speakers</h2>
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
              <p className="speaker-role">Keynote Speaker</p>
            </div>
          </div>
        </div>

        <div className="speaker-card fade-element workshop-card">
          <div className="workshop-content">
            <h3 className="workshop-title">Workshop Facilitator</h3>
            <p className="facilitator-names">Thomas Larsen / Jonas Vollmer</p>
            <p className="workshop-note">Workshop details to be announced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
