const ad = document.querySelector('.content--ad');

function toggleOpen() {
  this.classList.toggle('open');
}

ad.addEventListener('click', toggleOpen);


// flex: 5 when user scrolls to the ad
// collapse to just heading and after that animation ends change back to flex: 1 when the used closes the panel