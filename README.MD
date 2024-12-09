# Shopping List App

This project is a Shopping List website application that is built using HTML, CSS, and JavaScript. The application allows users to create, modify, and manage a shopping list with striking features that ensures a smooth user experience.

## Features

- **Add Items**: Users can input items into a text field and add them to the shopping list by either clicking the "Add" button or pressing the "Enter" key. 
- **Edit Items**: Once added, items can be edited directly within the list by clicking an "Edit" button, which switches or toggles to allow editing.
- **Delete Items**: Items can be removed from the list by pressing the "Delete" button next to the corresponding item.
- **Mark as Purchased**: Each item has a checkbox that allows users to mark it as "purchased." This visually strikes out the item to indicate that it's completed or has been purchased.
- **Clear List**: A "Clear List" button allows users to remove all items from the list at once.
- **Persistent Storage**: All changes to the list are automatically saved in the browser's `localStorage`, meaning the list persists even after closing and reopening the browser.


## How the project Works
### **HTML:**
Html provides the overall structure of the web page, including input fields, buttons, and the list container.

### **CSS:**
CSS styles the page, making it visually appealing with features like rounded buttons, box shadows, background color, hover effects, centered layout among others.

### **JavaScript:**
Javascript handles the functionality of adding, editing, and deleting items, clearing as well as saving the list to the`localStorage`. It also manages user interactions, such as detecting clicks on buttons and changes made to the checkboxes.


## The Project Structure

### **HTML File (index.html):**
- Contains the main structure of the page, including the input field, buttons, and the list container.
- References the CSS and JavaScript files for styling and functionality.

### **CSS File (style.css):**
- Defines styles for the overall layout, buttons, input fields, and list items.
- Uses modern design principles like box shadows, hover, rounded corners, and responsive text.

### **JavaScript File (index.js):**
- Implements core functionality, including adding, deleting, and editing list items.
- Interacts with `localStorage` to persist data between sessions.
- Uses event listeners to manage button clicks, item editing, and list clearing.

## Prerequisites

To run these scripts, you'll need:

1.  **Node.js and npm (Node Package Manager):**
      - Download and install Node.js from the official website: [https://nodejs.org/](https://www.google.com/url?sa=E&source=gmail&q=https://nodejs.org/)
      - Verify the installation by running `node -v` and `npm -v` in your terminal.

**Running the Scripts:**

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/sandramisigo/week2codechallenge](https://github.com/sandramisigo/week2codechallenge)
    ```

    

2.  **Navigate to the Repository Directory:**

    ```bash
    cd your-repo-name
    ```
3. **Run a Script:**
To run a script, use the Node.js command-line interface:

1. Open the `index.html` file in any modern web browser.
2. Use the input field to add items to the shopping list.
3. Edit, delete, or mark them as purchased as needed.
4. The list will remain saved even after closing the browser, thanks to `localStorage`.


## **Conclusion**

This project provides a simple yet effective way to manage a shopping list using web technologies. It's ideal for practicing basic front-end development skills, including DOM manipulation, event handling, and local storage management.

## **License**

This project is open-source and free to use under the MIT License. Feel free to modify and share as needed.

**Author:** 
Sandra Misigo

**Contact:**
For any questions or incase you experience challenges, feel free to contact me via [sandra.misigo@student.moringaschool.com]. Good luck!













