// Waits for the DOM to be fully loaded before running the script

document.addEventListener('DOMContentLoaded', () => {
  //allows us to get references to the input fields, buttons, and the list container.
  const inputField = document.getElementById('item-input');
  const addButton = document.getElementById('add-button');
  const clearButton = document.getElementById('clear-button');
  const itemList = document.getElementById('item-list');

  // function that allows us to load items from the localStorage when loading the page.
  const loadListFromLocalStorage = () => {
      const savedList = JSON.parse(localStorage.getItem('shoppingList')) || []; // Retrieves saved list or default to empty array
      savedList.forEach(item => addItemToList(item.text, item.purchased)); //adds saved item to the list
  };

  // function that allows us to save the list to our localStorage.
  const saveListToLocalStorage = () => {
      const listItems = Array.from(itemList.children).map(listItem => { //Converts the list items into an array
          const text = listItem.querySelector('span').textContent; // accesses the text of each list item
          const purchased = listItem.querySelector('input[type="checkbox"]').checked; //Checks if the item is marked as purchased
          return { text, purchased };
      });
      localStorage.setItem('shoppingList', JSON.stringify(listItems)); // Saves the array of items to the localStorage
  };

  // The function that allows us to add an item to the list.
  const addItemToList = (itemText, purchased = false) => {
      if (itemText === '') return; // If the input is empty, nothing is done

  //creating list items and their components.
      const listItem = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = itemText;

  // creating a checkbox for marking items that are purchased.
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = purchased;  // Restore checkbox status if item is already purchased
      checkbox.onchange = togglePurchased;

  //creating an edit button that lets the users to switch between editing and saving the items on the list.
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit'; //initial state of the button is edit
      editButton.addEventListener('click', () => toggleEditMode(listItem, span, editButton));// the click event switches between edit and save modes


  //creating a delete button that allows users to delete items from the list.
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          itemList.removeChild(listItem); // removes item from DOM
          saveListToLocalStorage();  // Allows us to save updated list after deleting an item from the list.
      });
   
  // Append the span, checkbox, editbutton, and delete buttons to the list item
      listItem.appendChild(span);
      listItem.appendChild(checkbox);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      itemList.appendChild(listItem);

      saveListToLocalStorage();  // Allows us to save updated list after adding an item on the list.
  };

  // function that allows us to switch/toggle between editing and saving items on the list.
  const toggleEditMode = (listItem, span, editButton) => { //switches from "Edit" mode, to "Save" mode
      if (editButton.textContent === 'Edit') {
          const input = document.createElement('input');
          input.type = 'text'; // creates a text input field
          input.value = span.textContent; // sets the input field value to the current item text
          listItem.replaceChild(input, span); // replaces the span with the input field
          editButton.textContent = 'Save'; // changes the button text to "Save"
      } else {
          const input = listItem.querySelector('input[type="text"]');
          const newText = input.value.trim(); // gets new text entered.
          if (newText !== '') {  // saves new text if not empty.
              span.textContent = newText; // updates span with new text.
              listItem.replaceChild(span, input); // replaces input field with updated span
              editButton.textContent = 'Edit'; //changes button text back to "Edit"
              saveListToLocalStorage();  // Allows us save updated list to local storage after editing.
          }
      }
  };

  // function to mark item as purchased/unpurchased
  const togglePurchased = (event) => {
      const itemText = event.target.previousSibling;  // get the span element before the checkbox
      if (event.target.checked) { // If checkbox is checked, mark the item as purchased
          itemText.style.textDecoration = 'line-through';  //add line-through to show purchased
      } else {   // If checkbox is unchecked, remove the line-through
          itemText.style.textDecoration = 'none';
      }
      saveListToLocalStorage();  // Save checkbox status after marking purchased/unpurchased.
  };

  //Function to handle adding a new item when the add button is clicked
  const addItem = () => {
      const itemText = inputField.value.trim(); // gets input value and trims any extra spaces
      addItemToList(itemText); // adds item to list
      inputField.value = ''; // clears input field
      inputField.focus(); //sets focus back to the input field 
  };

  //function to clear entire list and localStorage
  const clearList = () => {
      itemList.innerHTML = ''; //clear the list items from DOM
      localStorage.removeItem('shoppingList');  // clear saved list from localStorage
  };

  // adding event listeners for buttons and input field
  addButton.addEventListener('click', addItem); //when add button is clicked, add item to list
  clearButton.addEventListener('click', clearList); //when clear button is clicked, clear item from list
  inputField.addEventListener('keypress', (e) => {   
      if (e.key === 'Enter') {     // allows user to press "Enter" to add an item
          addItem();
      }
  });

  //This will enable us load the list from localStorage upon the page loading.
  loadListFromLocalStorage();
});
