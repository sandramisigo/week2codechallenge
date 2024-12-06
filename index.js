document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const clearButton = document.getElementById('clear-button');
    const itemList = document.getElementById('item-list');
  
    // Function to add a new item
    const addItem = () => {
      const itemText = inputField.value.trim();
      if (itemText === '') return;
  
      const listItem = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = itemText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        itemList.removeChild(listItem);
      });
  
      listItem.appendChild(span);
      listItem.appendChild(deleteButton);
      itemList.appendChild(listItem);
  
      inputField.value = '';
      inputField.focus();
    };
  
    // Function to clear the list
    const clearList = () => {
      itemList.innerHTML = '';
    };
  
    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addItem();
      }
    });
  });