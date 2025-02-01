import { useState, Fragment } from "react"; //react hooks

import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx"
import TabButton from "./components/TabButton.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    // alternative to unnecessary div also can use empty tag <>...</>
    <Fragment>
      <Header></Header>
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
