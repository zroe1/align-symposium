import React, { useEffect, useRef } from "react";
import forum from "./forum.jpg";
import "./About.css";

const About = () => {
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
    <div className="about-container">
      <h2 className="about-title" id="about-mobile-header">
        About the event
      </h2>
      <div className="marroon-divider" id="about-divider-mobile"></div>
      <div className="about-img-container">
        <img src={forum} alt="Forum" className="about-img fade-element" />
      </div>
      <div className="about-text-div">
        <h2 className="about-title fade-element" id="about-desktop-header">
          About the event
        </h2>
        <div className="marroon-divider fade-element" id="about-divider-desktop"></div>
        <p className="about-text fade-element">
          The Chicago Symposium on Transformative AI is an exclusive, two-day event taking place on
          November 9-10, 2024, at the prestigious David Rubenstein Forum at the University of
          Chicago. This carefully curated symposium brings together 30-40 of the most promising
          undergraduate students in the field of AI safety.
        </p>
        <p className="about-text fade-element">
          Nestled in the heart of Chicago's intellectual hub, participants will engage in rigorous
          discussions, attend expert-led talks, and collaborate on refining their models of AI's
          transformative potential.
        </p>
        <p className="about-text fade-element">
          Our venue offers an inspiring academic atmosphere, setting the stage for breakthrough
          insights and meaningful connections. Join us for this unique opportunity to shape the
          future of AI safety alongside peers and industry leaders.
        </p>
      </div>
    </div>
  );
};

export default About;
