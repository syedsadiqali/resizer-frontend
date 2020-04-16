import React from "react";

function ResultFiles(props) {
  return (
    <div>
        {props.resizedFiles
          ? props.resizedFiles.map((file) => (
              <div key={file.url}>
                <h2>{`width:${file.width} height:${file.height} `}</h2>

                <img src={file.url} />
              </div>
            ))
          : null}
    </div>
  );
}

export default ResultFiles;