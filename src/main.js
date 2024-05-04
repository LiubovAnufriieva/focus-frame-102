import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'modern-normalize';

// Show message on submit subscription form in footer
const form = document.querySelector('.footer-form');

form.addEventListener('submit', handleSubmit);

const inputEmailFooter = document.querySelector('.footer-input');




function handleSubmit(event) {
  event.preventDefault();

  const userEmail = inputEmailFooter.value.trim();

  if (userEmail || userEmail.checkValidity()) {
    clearInput();

    return iziToast.info({
      animateInside: true,
      position: 'topCenter',
      title: 'Info',
      message: 'You successfully subscribed on our updates! Thank you',
    });
  } else {
    return iziToast.warning({
      animateInside: true,
      position: 'topCenter',
      title: 'Info',
      message: 'You put incorrect value of email!',
    });
    
  }
}
setTimeout(handleSubmit, 7000);

// Встановлюємо значення поля введення як порожній рядок
function clearInput() {
  inputEmailFooter.value = '';
}

// Open and close the modal window in header

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
