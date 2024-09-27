// To create variables to hold the Ids
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Adding Event listeners
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))