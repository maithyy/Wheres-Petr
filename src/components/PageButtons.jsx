import { Link } from "react-router-dom";

function PageButtons(props) {
  return (
    <div>
      <button className="page-button"
        style={{
          width: 257,
          height: 57,
          borderRadius: 5,
          margin: 50,
          marginTop: 10,
          backgroundColor: "#EF9919",
          fontFamily: "JetBrains Mono",
          fontSize: 20,
          boxShadow: "0px 2px 2px #000004",
          transition: "transform .4s",
        }}
      >
        <Link to={props.page}>{props.text}</Link>
      </button>
    </div>
  );
}

export default PageButtons;
