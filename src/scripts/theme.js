/* Desenvolva sua lógica aqui ... */

export const darkMode = () => {
  const tagHtml = document.querySelector('html');
  const buttonDarkMode = document.querySelector(".buttonDarkMode");
  const iconDarkMode = document.querySelector(".buttonDarkMode img");

  buttonDarkMode.addEventListener("click", () => {
    tagHtml.classList.toggle("dark-mode")
    if(tagHtml.classList.contains('dark-mode')){
      iconDarkMode.setAttribute('src', './src/assets/img/sun.svg');
      localStorage.setItem('dark__mode', true);
  } else {
    iconDarkMode.setAttribute('src', './src/assets/img/moon.svg');
      localStorage.setItem('dark__mode', false);
  };
  })
}
