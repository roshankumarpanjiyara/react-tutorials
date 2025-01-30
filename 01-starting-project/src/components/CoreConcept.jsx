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

export default CoreConcept;