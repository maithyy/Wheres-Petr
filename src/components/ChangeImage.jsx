const React = require("react");
class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
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
          src={this.state.file}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    );
  }
}
export default DisplayImage;
