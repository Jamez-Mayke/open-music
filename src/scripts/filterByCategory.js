import { createCard } from "./createCard.js";
import { products } from "./productsData.js";

const rangeAlbuns = document.querySelector("#rangeAlbuns");
const productPrice = document.querySelector(".price");
const albunsBand = document.querySelector(".cards");

export function filterByCategory(categoires, albums) {
  const genreButtom = document.querySelectorAll(".genreButtom");

  genreButtom.forEach( button => {
    button.addEventListener("click", (e) => {

      localStorage.setItem("categoryIdGenre", categoires.indexOf(e.target.textContent));
      localStorage.setItem("categoryGenreName", e.target.textContent);

      albumsFiltered(albums);
    })
  })

  // filter range by price
  rangeAlbuns.addEventListener("input", (e) => {
    localStorage.setItem("inputPrice", e.target.value);
    productPrice.textContent = `Até R$ ${e.target.value},00`

    const albumsByPrice = albums.filter( album => album.price <= e.target.value);

    albunsBand.innerHTML = "";

    albumsByPrice.forEach( album => {
      const card = createCard(album);
      albunsBand.appendChild(card);
    })

    filterByCategoryAndGenre(products)

  })
}

function albumsFiltered(albums) {
  const albumsCategory = albums.filter( album => album.category === Number(localStorage.getItem("categoryIdGenre")));

  if (albumsCategory.length == 0 && localStorage.getItem("categoryGenreName") === "Todos") {
    albunsBand.innerHTML = "";
    albums.forEach( album => {
      const cardAlbum = createCard(album);
      albunsBand.appendChild(cardAlbum);
    })
  } else if (albumsCategory.length == 0) {
    albunsBand.innerHTML = "";
    const tagWarning = document.createElement("li");
    tagWarning.textContent = "Nenhum album encontrado!";
    tagWarning.className = "tagWarning";

    albunsBand.appendChild(tagWarning);
  } else {
    albunsBand.innerHTML = "";

    albumsCategory.forEach( album => {
      const card = createCard(album);
      albunsBand.appendChild(card);
    })
  }

}

function filterByCategoryAndGenre(albums) {
  const categoryIdGenre = Number(localStorage.getItem("categoryIdGenre"));
  const inputPrice = localStorage.getItem("inputPrice");
  
  const filterProducts = albums.filter( album => {
    if (Number(inputPrice) >= album.price && categoryIdGenre === album.category) {
      return album;
    } else if (Number(inputPrice) >= album.price && categoryIdGenre === 0) {
      return album;
    };
  })

  console.log(filterProducts);

  albunsBand.innerHTML = "";

  filterProducts.forEach( album => {
    const card = createCard(album);
    albunsBand.appendChild(card);
  })
  
}