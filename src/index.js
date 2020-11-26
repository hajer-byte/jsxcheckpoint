import reactDOM from "react-dom";
import react from "react";
import Jsxfunction from "./App";

function App() {
  return (
    <react.Fragment>
      <Jsxfunction />
    </react.Fragment>
  );
}
const rootElement = document.getElementById("root");
reactDOM.render(<App />, rootElement);
