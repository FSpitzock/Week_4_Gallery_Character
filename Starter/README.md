# 🟡 DOM Capstone Project: Character Gallery & Detail

## Instructions

This capstone project will challenge you to use all the DOM, events, and localStorage skills you’ve learned this week. You will build a two-page app:

- **Page 1 (Gallery):**  
  Users can add a Dragon or Human character (with name, image, and description) to a gallery. All characters are stored in localStorage. Clicking a character card takes you to a detail page for that character.

- **Page 2 (Character Detail):**  
  On this page, users can view the character’s details and add items (runes, weapons, potions) to the character’s bag. These items are stored in an array inside the character’s object in localStorage.

---

### Step-by-Step

#### 1. **Gallery Page (`index.html` + `gallery.js`)**

- Create a form to add a new character:
  - Type (Dragon or Human)
  - Name
  - Description
  - Image URL
- When the form is submitted:
  - Add the character to an array in localStorage (use `JSON.stringify` and `JSON.parse`).
  - Render all characters as cards in a gallery below the form.
- Each card should display the character’s image, name, type, and description.
- When a card is clicked:
  - Save the character’s index (or unique ID) to `sessionStorage`.
  - Redirect to the detail page (`detail.html`).

#### 2. **Character Detail Page (`detail.html` + `detail.js`)**

- On page load:
  - Read the selected character’s index from `sessionStorage`.
  - Load the character from localStorage and display their details.
- Show a list of items in the character’s bag (if any).
- Provide a form to add a new item to the bag:
  - Item type (Rune, Weapon, Potion)
  - Item name
- When the form is submitted:
  - Add the item to the character’s `bag` array in localStorage.
  - Update the displayed bag list.

#### 3. **General Requirements**

- Use the DOM API for all element creation, event handling, and updates.
- Use localStorage for persistent data and sessionStorage for temporary navigation state.
- Use CSS to style your pages and cards for a polished look.
- Test your app by adding, viewing, and updating multiple characters and their bags.

![Screenshot 2025-06-07 184710](https://github.com/user-attachments/assets/a1613e51-4320-470f-96ba-68407eb4474b)



![Screenshot 2025-06-07 184729](https://github.com/user-attachments/assets/9152f007-e658-41bb-a08e-9aa896d991a6)

---
## Research

- [MDN: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN: Web Storage API (localStorage & sessionStorage)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN: Forms and form events](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: HTML forms - Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Working_with_forms)

---

## Discuss

- How did you structure your data in localStorage? Why?
- What challenges did you face with DOM manipulation and event handling?
- How did you ensure data persists and updates correctly between pages?
- How could you extend this project? (e.g., editing/removing characters, more item types, images for items, etc.)
- What are the pros and cons of using localStorage and sessionStorage for this kind of app?
- How would you refactor your code for scalability or to use a framework/library?

---

**This is an extreme challenge! Work together, use your notes and resources, and ask questions as you go. Good luck!**
