import "./App.css";
import Info from "./components/Info.js";

function App() {
  return (
    <div className="App">
      <h3>BTS Discharge Countdown</h3>
      <Info />
      {/* eslint-disable-next-line */}
      <p className="footer">
        a creation by{" "}
        <a href="https://kennytrbl.github.io/" target="_blank" rel="noreferrer">
          Kenny Zhang
        </a>
        , © {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default App;
