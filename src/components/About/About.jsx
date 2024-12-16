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
        <img src={forum} alt="Forum" className="about-img" />
      </div>
      <div className="about-text-div">
        <h2 className="about-title fade-element" id="about-desktop-header">
          About the event
        </h2>
        <div className="marroon-divider fade-element" id="about-divider-desktop"></div>
        <p className="about-text fade-element">
          The Chicago Symposium on Transformative AI is a two-day event taking place on March 29-30,
          2025, at the David Rubenstein Forum at the University of Chicago. We invite 30-40 of the
          most promising undergraduate students in the field of AI safety. Over a weekend, students
          will be immersed in an intellectually vibrant and professional atmosphere, hear from
          speakers in technical and governance, and collaborate with like-minded peers.
        </p>
        <p className="about-text fade-element">
          Our belief is that students committed to work on AI Safety should think independently
          about what transformative AI will look like and come up with their own strategies without
          committing too early to existing proposals. Ultimately, our theory of change is that
          putting high-context students in the same room with a focus on developing mental models
          and challenging assumptions will substantially increase effectiveness of future efforts.
        </p>
      </div>
    </div>
  );
};

export default About;
