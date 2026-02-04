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


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

let index = 0;

// botão próximo
 if ( type === 'next'){
        btn-next.appendChild(listItem[0])
        container.classList.add('next')
    } else {
        list.prepend(listItem[listItem.length -1])
        thumb.prepend(thumbItem[thumbItem.length -1])
        container.classList.add('back')
    }


function updateSlide(){
  slides.style.transform = `translateX(-${index * 100}%)`;
}