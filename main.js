const mainLists = document.querySelectorAll("header nav > ul > .mainList");
mainLists.forEach((li) => {
  li.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI' && e.target.className == 'mainList') {
      mainLists.forEach((x) => {
        if (x != e.target) {
          x.children[1].classList.add('none');
          x.children[0].classList.remove('rotate');
        }
      })
      let img = e.target.children[0];
      e.target.querySelector('ul').classList.toggle('none');
      img.classList.toggle('rotate');
    }

  })
});
// change main lists images 
const mainListsImages = document.querySelectorAll("header nav > ul > .mainList > img");
const mediaQuiry = matchMedia('(max-width:767px)');
mediaQuiry.addEventListener('change', changeImage)
function changeImage(e) {
  if (e.matches) {
    mainListsImages.forEach((img) => {
      img.src = './images/icon-arrow-dark.svg';
    })
  } else {
    mainListsImages.forEach((img) => {
      img.src = './images/icon-arrow-light.svg';
    });
  }
}
window.onload = function () {
  if (this.innerWidth <= 767) {
    mainListsImages.forEach((img) => {
      img.src = './images/icon-arrow-dark.svg';
    })
  } else {
    mainListsImages.forEach((img) => {
      img.src = './images/icon-arrow-light.svg';
    });
  }
}
// burger icon active status 
const burgure = document.querySelector('.burgure');
const nav = document.querySelector('.nav');
burgure.onclick = function () {
  if (nav.classList.contains('none')) {
    this.src = './images/icon-close.svg';
  } else {
    this.src = './images/icon-hamburger.svg';
  }
  nav.classList.toggle('none')
}