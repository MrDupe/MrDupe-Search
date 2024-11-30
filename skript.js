const buttonModalv2 = document.getElementById('button-img');

const buttonModal = document.getElementById('img-menu');

const modalMenu = document.getElementById('modal-window-for-menu');

const closeMenu = document.getElementById('close-menu');

buttonModal.addEventListener('click', (MouseEvent) => {
   if (modalMenu.style.visibility = 'visible');
    else (modalMenu.style.visibility = 'hidden');
});

closeMenu.addEventListener('click', () => {
  modalMenu.style.visibility = 'hidden';
});

buttonModalv2.addEventListener('click', () => {
    modalMenu.style.visibility = 'visible';
});

// buttonModal.addEventListener('click', () => {
//   modalMenu.style.visibility = 'hidden';
// });
