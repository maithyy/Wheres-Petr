function IntroCards(props) {
  return (
    <div className="CardContainer">
      <div className="Card">
        <img src={props.chosenImage} alt="Peter" />
        <h2>{props.text}</h2>
      </div>
      <p>{props.caption}</p>
    </div>
  );
}

export default IntroCards;
