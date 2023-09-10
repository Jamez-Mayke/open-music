import { products, categories } from "./productsData.js";
import { createCard } from "./createCard.js";
import { renderGenreButtons } from "./renderGenreButtons.js";
import { filterByCategory } from "./filterByCategory.js";
import { darkMode } from "./theme.js";

const albunsBand = document.querySelector(".cards");


products.forEach( album => {
  const cardAlbum = createCard(album);
  albunsBand.appendChild(cardAlbum);
})

renderGenreButtons(categories);
filterByCategory(categories, products);

darkMode();