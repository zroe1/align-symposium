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
      <h2 className="registration-title">Register Your Interest</h2>
      <div className="registration-divider-container">
        <div className="registration-divider"></div>
      </div>
      <div className="registration-content">
        <p className="fade-element" style={{ fontSize: "18px" }}>
          While it's too early to apply for the Chicago Symposium on Transformative AI, we encourage
          you to express your interest now. By filling out our interest form, you'll be among the
          first to know when applications open.
        </p>
        <p className="fade-element" style={{ fontSize: "18px", marginBottom: "25px" }}>
          Don't miss this opportunity to be part of this exclusive event!
        </p>
        <a href="https://forms.gle/effWSChju3fvCmAy9" className="interest-button fade-element">
          Fill Out Interest Form
        </a>
      </div>
    </div>
  );
};

export default Register;
