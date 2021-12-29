const btn = document.querySelector('.hamburger')
const menu = document.querySelector('.dim')
const menuWrap = document.querySelector('.gnb-menu')
const closeBtn = document.querySelector('.arrow')

btn.addEventListener('click', () => {
  menu.classList.toggle("menu-show")
})

menu.addEventListener('click', (e) => {
  if(e.target !== btn && !menuWrap.contains(e.target)) {
    menu.classList.remove("menu-show")
  }
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove("menu-show")
})

const goTopBtn = document.querySelector('.go-top')

goTopBtn.addEventListener('click', function() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
})

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 110) {
      goTopBtn.classList.add("go-top-show")
    } else {
      goTopBtn.classList.remove("go-top-show")
    }

  if(matchMedia("screen and (max-width: 835px)").matches) {
    if(window.pageYOffset > 493) {
      goTopBtn.classList.add("go-top-show")
    } else {
      goTopBtn.classList.remove("go-top-show")
    }
  }
})





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
  })

  okBtn.addEventListener('click', () => {
    modal.classList.remove("show-modal")
    dim.classList.remove("show-modal")
    bodyScrolling.classList.remove("stop-scrolling")
  })

  dim.addEventListener('click', (e) => {
    if(e.target !== modalBtn && !modal.contains(e.target)) {
      modal.classList.remove("show-modal")
      dim.classList.remove("show-modal")
      bodyScrolling.classList.remove("stop-scrolling")
    }
  })