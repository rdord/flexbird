const ad = document.querySelector('.content--ad');
const removeAd = document.querySelector('.content-remove');

let waypoint = new Waypoint({
  element: ad,
  handler: () => ad.classList.toggle('open'),
  offset: 320 
});

function handleAdRemoving() {
  let fadeEffect = setInterval(() => {
    if (!ad.style.opacity) ad.style.opacity = 1;
    ad.classList.remove('open');

    if (ad.style.opacity < 0.1) {
      ad.parentNode.removeChild(ad);
      clearInterval(fadeEffect);
    } else ad.style.opacity -= 0.1;

  }, 50);
}

removeAd.addEventListener('click', handleAdRemoving);


