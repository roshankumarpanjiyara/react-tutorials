import { useState, Fragment } from "react"; //react hooks

import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    // alternative to unnecessary div also can use empty tag <> </>
    <Fragment>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* Dynamic core concept */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
            {/* user defined attribute convert to object in props */}
            {/* <CoreConcept
              title="Components"
              description={CORE_CONCEPTS[0].description}
              image={componentImg}
            /> */}
            {/* dynamic content */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            /> */}
            {/* when attribute and props name are same use spread method of JS */}
            {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
