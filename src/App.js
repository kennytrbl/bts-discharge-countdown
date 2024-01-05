import "./App.css";
import Info from "./components/Info.js";

function App() {
  return (
    <div className="App">
      <h3>BTS Discharge Countdown</h3>
      <Info />
      {/* eslint-disable-next-line */}
      {/* prettier-ignore */}
      <p className="footer">a creation by <a href="https://github.com/kennytrbl" target="_blank" rel="noreferrer">Kenny Zhang</a>, © 2024
      </p>
    </div>
  );
}

export default App;
