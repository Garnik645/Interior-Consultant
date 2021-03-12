const navSlide = () => {
   const burger = document.querySelector('.sand');
   const nav = document.querySelector('ul');
   
   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
   });
};

navSlide();