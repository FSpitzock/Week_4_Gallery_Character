const form = document.getElementById('characterForm'); // Pulls info from the form tag in HTML
const cardDiv = document.getElementById('dragonCard');

// Helper: Get dragons array from localStorage
function getDragons() {
  return JSON.parse(localStorage.getItem('dragonsGallery')) || [];
}

// Helper: Save dragons array to localStorage
function saveDragons(dragons) {
  localStorage.setItem('dragonsGallery', JSON.stringify(dragons));
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
      <div class="description">${dragon.description}</div>`;
      dragonCard.appendChild(card);
  });

 
// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const dragon = {
    name: form.name.value.trim(),
    type: form.type.value,
    description: form.description.value.trim(),
    imgUrl: form.imgUrl.value.trim()
  };
  const dragons = getDragons();
  dragons.push(dragon);
  saveDragons(dragons);
  renderGallery();
  form.reset();
  });

 
}
   // Add event listeners for remove buttons




// On page load, render the gallery
renderGallery();

