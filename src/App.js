import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-colors";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordian />

      {/* Random Color Generator  */}

      <RandomColor />
    </div>
  );
}

export default App;
