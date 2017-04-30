const ad = document.querySelector('.content--ad');

function toggleOpen() {
  this.classList.toggle('open');
}

ad.addEventListener('click', toggleOpen);
