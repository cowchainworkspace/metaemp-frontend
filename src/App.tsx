import "./App.css";

import { Buffer } from "buffer";
import Timer from "components/Countdown/Timer";
import Preloader from "components/Preloader/Preloader";
global.Buffer = Buffer;

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Enjoy MetaEmp in
        </h1>
        <Timer />

        <Preloader />
      </div>
    </div>
  );
}

export default App;
