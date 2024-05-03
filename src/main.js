import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Show message on submit subscription form in footer
  const goBtn = document.querySelector('.footer-btn');

  goBtn.addEventListener('click', handleClick);
  
  const inputEmailFooter = document.querySelector(".footer-input"); 


  function handleClick(event) {
 
    event.preventDefault();
    
    if (inputEmailFooter.value) { 
      if (event.target.classList.contains("footer-btn"))  {

        clearInput();
  
        return  iziToast.info({
          animateInside: true,
          position: 'topCenter',
          title: 'Info',
          message: 'You successfully subscribed on our updates! Thank you',
        });; 
  } 
  setTimeout(handleClick, 2000);
    }
 
}
// Встановлюємо значення поля введення як порожній рядок
function clearInput() {
    inputEmailFooter.value = ''; 
}


// Open and close the modal window in header

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