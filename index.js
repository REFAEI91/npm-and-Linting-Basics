const cards = document.querySelectorAll('[data-js="card"]');

function toggleButton() {
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
  });
}

toggleButton();
