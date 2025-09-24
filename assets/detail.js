
// Get selected character index from sessionStorage
const idx = parseInt(sessionStorage.getItem('selectedCharacterIdx'), 10);

// Get characters from localStorage
function getCharacters() {
  return JSON.parse(localStorage.getItem('dragonsGallery')) || [];
}

// Save characters to localStorage
function saveCharacters(characters) {
  localStorage.setItem('characterGallery', JSON.stringify(characters));
}

// Render character details
function renderCharacter() {
  const characters = getCharacters();
  const character = characters[idx];
//... rest of the JS to make the detail card
}
// Render all dragons in the gallery
function renderGallery() {
  const dragons = getDragons();
  dragonCard.innerHTML = '';
  dragons.forEach((dragon, idx) => {
    const card = document.createElement('div');
    card.className = 'dragon-card';
    card.innerHTML = `
      <img src="${dragon.imgUrl}" alt="${dragon.name}" />
      <h2>${dragon.name}</h2>
      <div class="type">Type: ${dragon.type}</div>
      <div class="description">${dragon.description}</div>`
         card.addEventListener('click', () => {
        sessionStorage.setItem('selectedCharacterIdx', idx);
        window.location.href = './assets/detail.html';
      });
      dragonCard.appendChild(card);
       
  });
}