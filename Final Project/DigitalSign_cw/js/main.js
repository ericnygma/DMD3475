//DOM


// addEventListener needs the callback to be a function declaration
document.getElementById('getPicture').addEventListener('click', getPicture);

const image = document.getElementById('image');

function getPicture() {
  fetch('https://api.unsplash.com/photos/random?client_id=8vRzc2a6YbiK-SkHz6KSBfylu-HA-R5urpuTKZP-bp8')
  .then(response=>response.json());
  .then(data => { image.src = data.urls.small; });
}

// Initialize with a picture
getPicture();