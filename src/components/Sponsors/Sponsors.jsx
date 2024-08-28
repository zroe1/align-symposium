import React, { useEffect, useRef } from "react";
import "./Sponsors.css";
import uchicago from "./uchicago.png";
// import hours from "./80000.webp";
import ea from "./ea.png";

const Sponsors = () => {
  const observerRef = useRef(null);

  const sponsors = [
    { name: "TechCorp", logo: uchicago },
    { name: "Future Systems", logo: ea },
    // { name: "AI Innovations", logo: hours },
    // { name: "Data Dynamics", logo: "/api/placeholder/200/100" },
  ];

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
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-logo fade-element">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
          </div>
        ))}
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
