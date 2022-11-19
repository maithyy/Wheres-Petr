import "./IntroCards.css";
import { Link } from "react-router-dom";

function IntroCards(props) {
  return (
    <div className="CardContainer">
      <div className="Card">
        <img src={props.chosenImage} alt="Peter" />
        <Link to={props.mypath}>
          <h2>{props.text}</h2>
        </Link>
      </div>
      <p>{props.caption}</p>
    </div>
  );
}

export default IntroCards;
