import "./App.css";
import Header from "./components/Header";
import About from "./components/About/About";
import HowWeAreDifferent from "./components/HowWeAreDifferent/HowWeAreDifferent";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <HowWeAreDifferent></HowWeAreDifferent>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
