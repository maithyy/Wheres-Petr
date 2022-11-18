import "./IntroCards.css";
import { Link } from "react-router-dom";

function IntroCards(props) {
  return (
    <div className="CardContainer">
      <Link to={props.mypath}>
        <div className="Card">
          <img src={props.chosenImage} alt="Peter" />
          <h2>{props.text}</h2>
        </div>
      </Link>
      <p>{props.caption}</p>
    </div>
  );
}

export default IntroCards;
