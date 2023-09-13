import "./Concepts.css";
import Concept from "./Concept";


function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept image={props.item[0].image} title={props.item[0].title} description={props.item[0].description}></Concept>
      <Concept image={props.item[1].image} title={props.item[1].title} description={props.item[1].description}></Concept>
      <Concept image={props.item[2].image} title={props.item[2].title} description={props.item[2].description}></Concept>
    </ul>
  );
}

export default Concepts;
