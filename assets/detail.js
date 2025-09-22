const bag = document.getElementById('bag')
const itemType = document.getElementById(itemType).value;
const itemName = document.getElementById(itemName).value;
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


  insertBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = "Golden Dragon";
  // insertBefore(newNode, referenceNode)
  bag.insertBefore(li, bag.firstElementChild);
});