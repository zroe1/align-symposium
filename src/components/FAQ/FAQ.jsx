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
        "The symposium is an exclusive event for 30-40 of the most promising undergraduate students in the field of AI safety. Attendees are carefully selected based on their engagement and potential in the field, including students recommended by advisors at 80,000 Hours and those who have undertaken research projects or made significant steps towards careers in AI safety.",
    },
    {
      question: "What makes this symposium unique?",
      answer:
        "Our symposium stands out due to three key factors: 1) Pre-conference preparation, where attendees submit written memos outlining their current models of transformative AI; 2) A focus on challenging assumptions, creating an environment where participants actively question their own and others' predictions about AI's future; and 3) A balanced approach to project discussions, limiting future planning to maintain open-minded exploration.",
    },
    {
      question: "What is the purpose of the pre-conference memos?",
      answer:
        "The pre-conference memos serve to clarify attendees' current models of transformative AI. This preparation encourages self-reflection and readiness for constructive dialogue. It doesn't have to be perfect, but it should represent the participant's current belief state and demonstrate a willingness to be challenged.",
    },
    {
      question: "How will the symposium improve attendees' understanding of AI safety?",
      answer:
        "The symposium aims to improve the robustness and rigor of attendees' models of AI alignment. This includes exploring how transformative AI will develop, its impact on the world, and what actions need to be taken. We believe that refining these models will lead to better project ideas and more effective work in AI safety.",
    },
    {
      question: "What kind of speakers can attendees expect?",
      answer:
        "We aim to invite around 8 speakers, covering areas such as technical AI safety, AI governance, and meta-level considerations. Our speakers will be selected for their generalist thinking, mentoring experience, and ability to prompt thoughtful conversation. We emphasize a 'scout mindset' approach, encouraging speakers to avoid unsubstantiated claims and engage in rigorous discourse.",
    },
    {
      question: "Is there a cost to attend the symposium?",
      answer:
        "While we aim to be generous with travel expenses (subject to funding constraints), we are considering implementing a modest attendance fee. This is to ensure commitment from participants without overly restricting the pool of attendees. The exact cost structure is still being determined, and we welcome feedback on this aspect.",
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
