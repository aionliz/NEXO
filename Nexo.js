function toggleMenu() {
  document.querySelector('.burger').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.overlay').classList.toggle('open');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
  document.querySelector('.burger').classList.remove('open');
  document.querySelector('.menu').classList.remove('open');
  document.querySelector('.overlay').classList.remove('open');
  }
});