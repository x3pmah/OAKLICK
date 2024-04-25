new Swiper('.swiper-container',{

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    autoplay:{
        delay: 2500,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },

    loop:true,
});



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('products-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.products');
  
  for (let elm of elements) {
    observer.observe(elm);
  }