import webjampetr from "../images/webjampetr.png";

const React = require("react");

class ChangeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const img = new Image();
    img.src = URL.createObjectURL(event.target.files[0]);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 800, 800);
    };

    const petr_img = new Image();
    petr_img.src = URL.createObjectURL({ webjampetr });

    petr_img.onload = () => {
      ctx.drawImage(img, 0, 0, 100, 100);
      this.setState({
        file: canvas.toDataURL("image/png"),
      });
    };
  }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={this.handleChange}
        />{" "}
        <br />
        <br />
        <img
          id="UploadedImage"
          alt="Your pic with Petr"
          src={this.state.file}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    );
  }
}
export default ChangeImage;
