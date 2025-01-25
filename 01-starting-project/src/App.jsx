import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max +1));
}

function Header(){
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

// pass the props as parament ans use the attribute to define the value
// alternative is to use object destructuring CoreConcept({title, description, image})
function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* user defined attribute convert to object in props */}
            <CoreConcept title="Components" description={CORE_CONCEPTS[0].description} image={componentImg}/> 
            {/* dynamic content */}
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            {/* when attribute and props name are same use spread method of JS */}
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
