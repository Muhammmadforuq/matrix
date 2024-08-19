document.querySelectorAll('.toggleMenu').forEach((btn)=>{
  if(btn){
    btn.addEventListener('click',()=>{
      document.querySelector('.menu').classList.toggle('-translate-x-full');
    })
  }
})



const services = new Swiper(".services", {
    slidesPerView: 1,
    // loop: true,
    pagination: {
      el: ".services-pagination",
      clickable: true,
      bulletClass: 'services-pagination-bullet',
      bulletActiveClass: 'services-pagination-bullet-active',
      renderBullet: function (index, className) {
      return `<span class="${className}">${this.slides[index].querySelector('h3').textContent}</span>`;
  }
    },
    navigation: {
      nextEl: ".services-next",
      prevEl: ".services-prev",
    },
  });


  const itemHeaders = document.querySelectorAll(".accordion-item-header");

  itemHeaders.forEach((accordion) => {
    accordion.addEventListener("click", collapseAccordions);

    function collapseAccordions() {
      const activeAccordion = document.querySelector(".active");
      if (activeAccordion && activeAccordion !== accordion) {
        activeAccordion.classList.toggle("active");
        activeAccordion.nextElementSibling.style.maxHeight = 0;
      }

      accordion.classList.toggle("active");
      const accordionItemBody = accordion.nextElementSibling;

      if (accordion.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    }
  });