import "./App.css";
import Header from "./components/Header";
import About from "./components/About/About";
import HowWeAreDifferent from "./components/HowWeAreDifferent/HowWeAreDifferent";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors";
import Register from "./components/Register/Register";
import Speakers from "./components/Speakers/Speakers";

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <HowWeAreDifferent></HowWeAreDifferent>
      <Speakers></Speakers>
      <Register></Register>
      <Sponsors></Sponsors>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
