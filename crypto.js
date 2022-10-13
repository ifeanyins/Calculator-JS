const show = document.getElementById('unviel');

const btn = document.querySelector('.join');

btn.addEventListener('click', () => {
  show.style.display = 'block'
  setTimeout(() => {
    show.style.display = 'none'
  }, 5000)
})