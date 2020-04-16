import React from "react";
import "./App.css";
import { loadImage, resizeImage } from "./Utils/ImageUtils";
import UploadForm from "./Components/uploadForm";
import ResultFiles from "./Components/resultFiles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      loaded: 0,
      resizedFiles: null,
      uploaded: false,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Image Resizer</h1>
        <h2>Plese Select File and click Upload!! </h2>
        <UploadForm
          upload={this.state.upload}
          onFileChange={this.onChangeHandler}
          clear={this.clear}
          resizeImage={this.resizeImage}
        />
        <ResultFiles resizedFiles={this.state.resizedFiles} />
      </div>
    );
  }

  clear = () => {
    this.setState({
      selectedFile: null,
      resizedFiles: null,
      uploaded: false,
    });
  };

  onChangeHandler = (event) => {
    const selectedFile = event.target.files[0];
    loadImage(selectedFile)
      .then((res) => {
        return this.setState({
          selectedFile,
          image: res,
          loaded: 0,
        });
      })
      .catch((err) => alert(err));
  };

  resizeImage = (e) => {
    e.preventDefault();
    const promise1 = resizeImage(this.state.selectedFile, 755, 450);
    const promise2 = resizeImage(this.state.selectedFile, 365, 450);
    const promise3 = resizeImage(this.state.selectedFile, 365, 212);
    const promise4 = resizeImage(this.state.selectedFile, 380, 380);

    Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
      this.setState({ resizedFiles: res, uploaded: true });
    });
  };
}

export default App;
