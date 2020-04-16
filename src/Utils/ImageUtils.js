export function loadImage(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      var image = new Image();

      image.src = e.target.result;

      image.onload = function () {
        if (!isImageProperlySized(image.width, image.height)) {
          return reject("please upload properly sized image");
        }

        return resolve(image);
      };
    };
  });
}

export function resizeImage(image, width, height) {
  return new Promise(function (resolve, reject) {
    var data = new FormData();    
    data.append("image", image);

    fetch(`http://localhost:8000/resize?width=${width}&height=${height}`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then(json => resolve({width, height, url: `http://localhost:8000/${json.fileName}`}));
  });
}

function isImageProperlySized(
  width,
  height,
  reqWidth = 1024,
  reqHeight = 1024
) {
  return width === reqWidth && height === reqHeight;
}
