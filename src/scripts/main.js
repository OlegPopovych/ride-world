/* eslint-disable max-len */
/* eslint-disable no-undef */
'use strict';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-title--animate');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
  observer.observe(title);
});

const compareObserver = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('compare__products--animate');
    }
  });
});

compareObserver.observe(document.querySelector('.compare__products'));

const moveFreeObserver = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('move-free__description--animate');
    }
  });
});

moveFreeObserver.observe(document.querySelector('.move-free__description'));

const contactObserver = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('contact__wrapper--animate');
    }
  });
});

contactObserver.observe(document.querySelector('.contact__wrapper'));

const detailsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('description--animate');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.description').forEach(title => {
  detailsObserver.observe(title);
});
