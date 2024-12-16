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
          <b>Pre-Conference Preparation:</b> Our aim is to build shared context among participants
          to facilitate constructive dialogue about TAI models. In service of this goal, we will
          require attendees to have read the work of a few of the speakers. This will allow speaker
          sessions to include much more (Chicago-style) interactive Q&A as well.
        </li>
        <li className="fade-element">
          <b>Focus on Challenging Assumptions:</b> We will foster a unique environment where
          participants actively question their own and others' predictions about the future of AI.
          We will select for attendees who are both knowledgeable about transformative AI and also
          serious about growing during the course of the conference; in inviting speakers and
          designing programming, we will further emphasize this goal.
        </li>
      </ol>
    </div>
  );
};

export default HowWeAreDifferent;
