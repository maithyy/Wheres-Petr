import { saveAs } from "file-saver";
import "./ChangeImage.css";

const React = require("react");

class ChangeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.DowloadImage = this.DownloadImage.bind(this);
    this.EditImageContainer = this.EditImageContainer.bind(this);
    this.name = null;
  }

  handleChange(event) {
    const img = new Image();
    this.name = event.target.files[0].name.replace(".jpg", "");
    img.src = URL.createObjectURL(event.target.files[0]);

    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const petr_img = new Image();
    fetch(
      "http://localhost:3000/static/media/webjampetr.56635fd10254ed7bfd69.png"
    )
      .then(function (response) {
        return response.blob();
      })
      .then(function (thisBlob) {
        var objectUrl = URL.createObjectURL(thisBlob);
        petr_img.src = objectUrl;
        console.log(petr_img.src);
      });

    petr_img.onload = () => {
      ctx.drawImage(
        petr_img,
        Math.random() * (canvas.width - 100),
        Math.random() * (canvas.height - 100),
        150,
        100
      );
      this.setState({
        file: canvas.toDataURL("image/png"),
      });
      this.EditImageContainer();
    };
  }

  EditImageContainer() {
    console.log("Executing");
    const label = document.getElementsByClassName("Label");
    const button = document.getElementById("Download");
    label[0].style.visibility = label[0].style.visibility == "" ? "hidden" : "";
    button.style.cursor = "pointer";
  }

  DownloadImage() {
    console.log(this.state.file);
    saveAs(this.state.file, this.name + "_with_Petr.png");
  }

  render() {
    return (
      <div className="DisplayImage">
        <h2>Find Petr!</h2>
        <p>
          Upload an image and see if you can find petr. If you like your image,
          you can also donwload it.
        </p>
        <div className="ImageContainer">
          <div className="BackgroundImage">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="Download file"
              onChange={this.handleChange}
              hidden
            />
            <img
              id="UploadedImage"
              alt="Your upload with Petr"
              src={this.state.file}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <label className="Label" for="Download file">
            Choose Image
          </label>
        </div>
        <button id="Download" onClick={this.DownloadImage}>
          Download
        </button>
      </div>
    );
  }
}
export default ChangeImage;
