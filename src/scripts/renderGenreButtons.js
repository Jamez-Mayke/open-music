const buttons = document.querySelector(".filters__genre");

export function renderGenreButtons(listButtons) {
  listButtons.forEach( button => {

    const liButton = document.createElement("li");
    const tagButton = document.createElement("button");

    tagButton.className = "genreButtom";
    tagButton.textContent = button;

    liButton.appendChild(tagButton);
    buttons.append(liButton);
  })

}