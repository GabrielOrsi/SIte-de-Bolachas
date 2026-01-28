  const btn = document.getElementById('hamburguer');
  const menu = document.querySelector('.menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });