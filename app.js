//After looking at the solution I realized I was supposed to focus on using AJAX, which just slipped my mind when I began this project
//Either way I accomplished it differently, but it works. Ill try to be more careful about that in the future haha :)

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearGIFs);

console.log("Let's get this party started!");
async function searchGIF(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=1`);
    const gifImage = document.createElement('img');
    gifImage.src = response.data.data[0].images.original.url;
    document.getElementById("gifContainer").appendChild(gifImage);
  }

  function clearGIFs() {
    const gifContainer = document.getElementById("gifContainer");
    while (gifContainer.firstChild) {
      gifContainer.removeChild(gifContainer.firstChild);
    }
  }