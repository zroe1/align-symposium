import React, { useEffect, useRef } from "react";
import "./HowWeAreDifferent.css";

const HowWeAreDifferent = () => {
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
    <div className="how-we-are-different-container">
      <h2 className="how-we-are-different-title">How We Are Different</h2>
      <div className="divider-container">
        <div className="marroon-divider"></div>
      </div>
      <ol>
        <li className="fade-element">
          <b>Pre-Conference Preparation:</b> Attendees submit written memos outlining their current
          models of transformative AI, encouraging self-reflection and readiness for constructive
          dialogue.
        </li>
        <li className="fade-element">
          <b>Focus on Challenging Assumptions:</b> We create a unique environment where participants
          actively question their own and others' predictions about the future of AI, fostering
          intellectual growth and deeper understanding.
        </li>
        <li className="fade-element">
          <b>Balanced Approach to Project Discussion:</b> While we provide space to examine past and
          ongoing projects in detail, we intentionally limit future planning to prevent attachment
          to specific ideas and maintain open-minded exploration.
        </li>
      </ol>
    </div>
  );
};

export default HowWeAreDifferent;
