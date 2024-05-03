(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-open");
    }
  })();

  const goBtn = document.querySelector('.footer-btn');

  goBtn.addEventListener('click', handleClick);
  
  const inputEmailFooter = document.querySelector(".footer-input");

  function handleClick(event) {

    event.preventDefault();
    if (event.target.classList.contains("footer-btn"))  {
        clearInput();
        return alert('You successfully subscribed on our updates! Thank you!');
  } 
  setTimeout(handleClick, 2000);
 
}
  
function clearInput() {
    inputEmailFooter.value = ''; // Встановлюємо значення поля введення як порожній рядок
}
// Викликати функцію clearInput() для очищення поля введення

