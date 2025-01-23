import React, { useEffect, useRef } from "react";
import "./Register.css";

const Register = () => {
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
    <div className="registration-container">
      <h2 className="registration-title">Apply Now</h2>
      <div className="registration-divider-container">
        <div className="registration-divider"></div>
      </div>
      <div className="registration-content">
        <p className="fade-element" style={{ fontSize: "18px" }}>
          Applications are open now! The deadline for this application is Feb 20, 2025 (11:59 pm
          AoE).
        </p>
        <p className="fade-element" style={{ fontSize: "18px", marginBottom: "25px" }}>
          We will cover travel and accommodation costs if we admit you.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5f0PaFaeFQs9BfyLH3SbaGPg7F_RTT5t-HCiy8xMUA33q6A/viewform?usp=sharing"
          className="interest-button fade-element">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Register;
