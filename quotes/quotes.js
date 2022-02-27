function displayinhtml(jsondata) {
  fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#quoteholder").innerHTML = data.en;
      console.log(data);
      document.querySelector("#authornameholder").innerHTML = data.author;
      document.querySelector("#submit").innerHTML = "submit";
    })
    .catch((err) => handlingerror(err));
}

document.querySelector("#submit").addEventListener("click", displayinhtml);

function handlingerror(err) {
  document.querySelector("#quoteholder").innerHTML = "something went wrong";
}
