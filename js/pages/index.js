'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const scrollerCarousel = document.getElementById('carousel-scroller');
  const scrollerCarouselItems = Array.from(scrollerCarousel.children);

  scrollerCarouselItems.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    scrollerCarousel.appendChild(duplicatedItem);
  });
});
