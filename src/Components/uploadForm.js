import React from "react";

function UploadForm(props) {
  return (
    <form action="" encType="multipart/form-data">
      <input type="file" onChange={props.onFileChange} />
      {!props.uploaded && (
        <input
          className="button"
          type="submit"
          value="upload"
          onClick={props.resizeImage}
        />
      )}
      {props.uploaded && (
        <button className="button" onClick={props.clear}>
          Clear
        </button>
      )}
    </form>
  );
}

export default UploadForm;