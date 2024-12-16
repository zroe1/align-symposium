import React, { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Who can attend the Chicago Symposium on Transformative AI?",
      answer:
        "The symposium is an exclusive event for 30-40 of the most promising undergraduate students in the field of AI safety. Thus, we will select for applicants who have taken steps towards starting a career in AI Safety.",
    },
    {
      question: "What kind of speakers can attendees expect?",
      answer:
        "We aim to invite around 8 speakers, covering areas such as technical AI safety, AI governance, and meta-level considerations. Our speakers will be selected for their generalist thinking, mentoring experience, and ability to prompt thoughtful conversation. We emphasize a 'scout mindset' approach, encouraging speakers to avoid unsubstantiated claims and engage in rigorous discourse.",
    },
    {
      question: "Is there a cost to attend the symposium?",
      answer:
        "While we aim to be generous with travel expenses (subject to funding constraints), we will not cover all attendee expenses. This is to ensure commitment from participants. ",
    },
    {
      question: "How will the success of the symposium be measured?",
      answer:
        "We plan to assess the symposium's impact through several methods: quantitative self-assessments before and after the event to measure improvements in attendees' world models, participant feedback and self-reflection, and follow-ups a few months after the event to gauge the stickiness of benefits and any resulting career or project decisions.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-divider-container">
        <div className="faq-divider"></div>
      </div>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
