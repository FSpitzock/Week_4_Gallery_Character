const form = document.getElementById('characterForm'); // Pulls info from the form tag in HTML
const cardDiv = document.getElementById('dragonCard');

// Helper: Get dragons array from localStorage
function getDragons() {
  return JSON.parse(localStorage.getItem('dragonsGallery')) || [];
}
console.log(getDragons);

// Helper: Save dragons array to localStorage
function saveDragons(dragons) {
  localStorage.setItem('dragonsGallery', JSON.stringify(dragons));
}
console.log(saveDragons);

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
      <div class="description">${dragon.description}</div>
      <button class="add-btn" data-idx="${idx}">Bag Items</button> 
      <button class="remove-btn" data-idx="${idx}">Remove</button> `;// REMOVES INDIVIDUALLY BECAUSE IT'S WITHIN EACH CREATED CARD/DIV 
      dragonCard.appendChild(card);
  });
  

    // Add event listeners for remove buttons
  const removeBtns = dragonCard.querySelectorAll('.remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-idx'));
      const dragons = getDragons();
      dragons.splice(idx, 1); // REMOVES IT FROM THE DATABASE
      saveDragons(dragons); // RE-USABLE
      renderGallery();
      form.reset();
    });
  });

//Click and hover 
const addBtn = dragonCard.querySelectorAll('.add-btn');
addBtn.forEach(btn => {
btn.addEventListener('click', function() {
    const imageUrl = parseInt(this.getAttribute('data-idx'));
    const dragons = getDragons();
     saveDragons(dragons); // RE-USABLE
      renderGallery();
      form.reset();
      localStorage.setItem('selectedImageURL', imageUrl);
 window.location.href = './assets/detail.html';
});
}); console.log(addBtn)

// hover
const hoverBox = document.getElementById('dragonCard');
hoverBox.addEventListener('mouseover', function() {
  hoverBox.style.background = "#ffcc02";
  hoverBox.style.color="#232323";
  });
hoverBox.addEventListener('mouseout', function () {
    hoverBox.style.background = "";
    hoverBox.style.color = "";
})
}

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const dragon = {
    name: form.name.value.trim(),
    type: form.type.value.trim(),
    description: form.description.value.trim(),
    imgUrl: form.imgUrl.value.trim()
  };
  const dragons = getDragons();
  dragons.push(dragon);
  saveDragons(dragons);
  renderGallery();
  form.reset();
  });

// On page load, render the gallery
renderGallery();
console.log(renderGallery);




//JS for detail.html page
/*const bag = document.getElementById('bag')
const itemType = document.getElementById(itemType).value;
const itemName = document.getElementById(itemName).value;


  insertBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = "Golden Dragon";
  // insertBefore(newNode, referenceNode)
  bag.insertBefore(li, bag.firstElementChild);
});*/