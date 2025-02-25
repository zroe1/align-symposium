import React, { useEffect, useRef } from "react";
import "./Sponsors.css";
import uchicago from "./uchicago.png";
// import hours from "./80000.webp";
import op from "./op.png";
import ev from "./ev.png";

const Sponsors = () => {
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
    <div className="sponsors-container">
      <h2 className="sponsors-title fade-element">Our Sponsors</h2>
      <div className="sponsors-divider-container fade-element">
        <div className="sponsors-divider"></div>
      </div>
      <div className="sponsors-logos">
        <div key={"x-lab"} className="sponsor-logo fade-element" id="x-lab-logo">
          <img src={uchicago} alt={`x-lab logo`} />
        </div>
        <div key={"effective ventures"} className="sponsor-logo fade-element">
          <img src={ev} alt={`effective ventures`} />
        </div>
        <div key={"open philanthropy"} className="sponsor-logo fade-element">
          <img src={op} alt={`open philanthropy`} />
        </div>
      </div>
      <div className="sponsors-thanks fade-element">
        {/* <h3>Special Thanks</h3> */}
        <p>
          We would like to also like to express our deepest gratitude to Matt Reardon (80,000 Hours)
          and Tzu Kit Chan (SAIA) for their invaluable support and mentoring.
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
