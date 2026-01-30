  const responsivo = document.querySelector('.responsivo');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

 function abrirFecharMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  responsivo.addEventListener('click', abrirFecharMenu);
  closeBtn.addEventListener('click', abrirFecharMenu);
  overlay.addEventListener('click', abrirFecharMenu);