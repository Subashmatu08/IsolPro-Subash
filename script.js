console.log("hello");
const hotDeals = document.querySelector(".hot-deals");
const newDeals = document.querySelector(".new-deals");
const newDealsCards = newDeals.querySelectorAll(".card-image");
const hotDealsCards = hotDeals.querySelectorAll(".card-image");

hotDealsCards.forEach((card, index) => {
  const imgElement = document.createElement("img");
  const imgElement2 = document.createElement("img");
  if (index < 3) {
    imgElement.src = `./images/${index + 1}.jpg`;
    imgElement2.src = `./images/${index + 1}.jpg`;
  } else {
    imgElement.src = `./images/${hotDealsCards.length - index + 1}.jpg`;
    imgElement2.src = `./images/${hotDealsCards.length - index + 1}.jpg`;
  }
  imgElement.classList.add("img-fluid");
  imgElement2.classList.add("img-fluid");
  imgElement.style.width = "fit-content";
  imgElement2.style.width = "fit-content";
  card.appendChild(imgElement);
  newDealsCards[index].appendChild(imgElement2);
});
