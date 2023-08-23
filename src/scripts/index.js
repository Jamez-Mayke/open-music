import { products, categories } from "./productsData.js";

const albunsBand = document.querySelector(".cards");

function renderGenreButtons(listButtons) {
  const buttons = document.querySelector(".filters__genre");

  listButtons.forEach( button => {
    const liButton = document.createElement("li");
    const tagButton = document.createElement("button");

    tagButton.textContent = button

    liButton.appendChild(tagButton);
    buttons.append(liButton)
  })
}


function createCardAlbum(product) {
  const { title, price, img, band, year } = product;
  
  const card = document.createElement("li")
  const cardImage = document.createElement("img");
  const bandName = document.createElement("p");
  const dataAlbum = document.createElement("p");
  const titleAlbum = document.createElement("h2");
  const containerPrice = document.createElement("span");
  const albumPrice = document.createElement("p");
  const buy = document.createElement("button");


  cardImage.src = img;
  cardImage.alt = `Album da banda ${band}`;
  bandName.textContent = band;
  dataAlbum.textContent = year;
  titleAlbum.textContent = title;
  albumPrice.textContent = `R$ ${price}`;
  buy.textContent = "Comprar";
  
  containerPrice.appendChild(albumPrice);
  
  card.append(cardImage, bandName, dataAlbum, titleAlbum, containerPrice, buy);
  return card
}

products.forEach( product => albunsBand.append(createCardAlbum(product)));

renderGenreButtons(categories);