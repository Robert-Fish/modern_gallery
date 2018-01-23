const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to source of cliked image
  current.src = e.target.src;

  // Add fadeIn class
  current.classList.add('fade-in');

  // Remove class using timeout
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to var
  e.target.style.opacity = opacity;

}
