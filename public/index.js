const carouselBtn1 = document.getElementById("picture1");
const carouselBtn2 = document.getElementById("picture2");
const carouselBtn3 = document.getElementById("picture3");
const header = document.getElementById("header");
const resultsList = document.getElementById("resultsList");
const searchBtn = document.getElementById("searchBtn");

carouselBtn1.addEventListener("click", function(event) {
  header.style.backgroundImage = "url('/imgs/2-min.png')";
  event.stopPropagation();
});

carouselBtn2.addEventListener("click", function(event) {
  header.style.backgroundImage = "url('/imgs/chuck1-min.png')";
  event.stopPropagation();
});

carouselBtn3.addEventListener("click", function(event) {
  header.style.backgroundImage = "url('/imgs/kenny_chuck-min.png')";
  event.stopPropagation();
});

function createLi(content) {
  let li = document.createElement("li");
  li.textContent = content;
  return li;
}

// searchBtn.addEventListener("click", function(event) {
//   let request = new XMLHttpRequest();
//   let playerName = document.getElementById("searchBox").value;
//   request.open("GET", `https://www.balldontlie.io/api/v1/players?&per_page=100&search=${playerName}`, "true");
//   request.addEventListener("load", function() {
//     if(request.status >= 200 && request.status < 400) {
//       let response = (JSON.parse(request.responseText));
//       let newPlayer = [];
//       for(let p in response.data) {
//         newPlayer[p] = response.data[p].first_name;
//         createLi(newPlayer[p]);
//         resultsList.appendChild(newPlayer[p]);
//       }
//     }
//     else {
//       console.log("error");
//     }
//
//   });
//   request.send(null);
//   event.stopPropagation();
//   event.preventDefault();
// });
