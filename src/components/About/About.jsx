import forum from "./forum.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={forum} alt="Forum" className="about-img" />
      <div className="about-text-div">
        <h2 className="about-title">About the event</h2>
        <div className="marroon-divider"></div>
        <p className="about-text">
          The Chicago Symposium on Transformative AI is an exclusive, two-day event taking place on
          November 9-10, 2024, at the prestigious David Rubenstein Forum at the University of
          Chicago. This carefully curated symposium brings together 30-40 of the most promising
          undergraduate students in the field of AI safety. Nestled in the heart of Chicago's
          intellectual hub, participants will engage in rigorous discussions, attend expert-led
          talks, and collaborate on refining their models of AI's transformative potential. Our
          venue offers an inspiring academic atmosphere, setting the stage for breakthrough insights
          and meaningful connections. Join us for this unique opportunity to shape the future of AI
          safety alongside peers and industry leaders.
        </p>
      </div>
    </div>
  );
};

export default About;
