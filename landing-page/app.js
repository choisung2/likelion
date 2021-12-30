//menuBtn toggle

const btn = document.querySelector('.nav-trigger')
const dimMenu = document.querySelector('.dim')
const menuWrap = document.querySelector('.gnb-menu')
const closeBtn = document.querySelector('.arrow')

btn.addEventListener('click', () => {
  dimMenu.classList.toggle("menu-show")
})

dimMenu.addEventListener('click', (e) => {
  if(e.target !== btn && !menuWrap.contains(e.target)) {
    dimMenu.classList.remove("menu-show")
  }
})

closeBtn.addEventListener('click', () => {
    dimMenu.classList.remove("menu-show")
})

window.addEventListener('scroll', function () {
    dimMenu.classList.remove("menu-show")
})


//topBtn

const goTopBtn = document.querySelector('.go-top')

goTopBtn.addEventListener('click', function() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
})

window.addEventListener('scroll', () => {
  if (110 < window.pageYOffset ) {
      goTopBtn.classList.add("go-top-show")
    } else {
      goTopBtn.classList.remove("go-top-show")
    }

  if(matchMedia("screen and (max-width: 835px)").matches) {
    if(493 < window.pageYOffset) {
      goTopBtn.classList.add("go-top-show")
    } else {
      goTopBtn.classList.remove("go-top-show")
    }
  }

  if(matchMedia("screen and (max-width: 475px)").matches) {
    if(window.pageYOffset > 2546) {
      goTopBtn.classList.remove("go-top-show")
    }
  }
})


// modal

  const modalBtn = document.querySelector(".btn-modal")
  const modal = document.querySelector(".modal")
  const dim = document.querySelector(".modal-dim")
  const okBtn = document.querySelector(".ok-btn")
  const bodyScrolling = document.querySelector("body")
  const form = document.querySelector(".subscribe-input")

 form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  modalBtn.addEventListener('click', () => {
    modal.classList.toggle("show-modal")
    dim.classList.toggle("show-modal")
    bodyScrolling.classList.toggle("stop-scrolling")
    goTopBtn.classList.remove("go-top-show")
  })

  okBtn.addEventListener('click', () => {
    modal.classList.remove("show-modal")
    dim.classList.remove("show-modal")
    bodyScrolling.classList.remove("stop-scrolling")
    goTopBtn.classList.add("go-top-show")
  })

  dim.addEventListener('click', (e) => {
    if(e.target !== modalBtn && !modal.contains(e.target)) {
      modal.classList.remove("show-modal")
      dim.classList.remove("show-modal")
      bodyScrolling.classList.remove("stop-scrolling")
      goTopBtn.classList.add("go-top-show")
    }
  })