export function createCard(album) {
  const { title, price, img, band, year } = album;
  
  const card = document.createElement("li")
  const cardImage = document.createElement("img");
  const bandName = document.createElement("p");
  const dataAlbum = document.createElement("p");
  const titleAlbum = document.createElement("h2");
  // const containerPrice = document.createElement("span");
  const albumPrice = document.createElement("p");
  const buy = document.createElement("button");
  const separeteContentDescription = document.createElement("div");
  const separeteContent = document.createElement("div");
  const separeteContentBuy = document.createElement("div");

  card.className = "card";
  cardImage.src = img;
  cardImage.alt = `Album da banda ${band}`;
  bandName.textContent = band;
  dataAlbum.textContent = year;
  titleAlbum.textContent = title;
  albumPrice.className = "productPrice"
  albumPrice.textContent = `R$ ${price.toFixed(2).replace(".", ",")}`;
  buy.textContent = "Comprar";
  separeteContent.className = "albumName";
  
  separeteContent.append(bandName, dataAlbum);

  separeteContentBuy.append(albumPrice, buy);
  separeteContentBuy.className = "info__buy"

  separeteContentDescription.className = "descriptionAlbum";

  separeteContentDescription.append(separeteContent, titleAlbum, separeteContentBuy);
  
  card.append(cardImage, separeteContentDescription);
  return card
}