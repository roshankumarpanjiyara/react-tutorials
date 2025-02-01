import componentImg from "../assets/components.png";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {/* Dynamic core concept */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} />
        ))}
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
    </Section>
  );
}
