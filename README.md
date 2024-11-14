# JavaScript Advanced: Interacting with the DOM

![A simple, informative web page titled 'So You Want to Be a Software Developer.' At the top, a large header reads the main title, followed by a tagline: 'Exploring the World of Coding and Development!' The page is divided into sections. The first section, 'Languages to Learn,' lists JavaScript, Python, React, and Databases. Next is 'Why Become a Developer?' describing reasons like problem-solving and creativity. The third section, 'Developer Skills,' covers tools like Git, debugging, teamwork, and responsive design. At the bottom, the footer encourages 'Happy Coding! - From ThriveDX](./assets/images/example.png)

---

## Description 📄

In this lab, we will focus on **JavaScript DOM manipulation**, allowing students to practice selecting and modifying elements within a web page using JavaScript. You will start with a **base HTML and CSS file** that provides structure and style. Using JavaScript, you will interact with and apply changes to elements within this base HTML, demonstrating how to dynamically manipulate the DOM and create visually engaging web pages.

### Key Concepts Covered:
- **Element Selection Methods**: Use `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll` to target and manipulate HTML elements.
- **Styling with JavaScript**: Apply CSS styles dynamically through JavaScript, enhancing interactivity.
- **Sequential and Timed Changes**: Use timers to stagger changes to elements, creating animated effects.

### By the end of this lab, you will:
- Learn to select and style elements on a web page dynamically.
- Manipulate element properties using various DOM selection methods.
- Apply delays and animations to create engaging, interactive page elements.

---

## Expected Project Structure 🏗️

Your project should be structured as follows:

```plaintext
Interacting-with-the-DOM/
├── index.html
├── styles.css
└── index.js
```

##

## 1. **Fork and Clone the Starter Repository**

- [ ] Begin by **forking** and then **cloning** the starter repository from GitHub to your local development environment. **Do not clone the supplied repository directly**; make sure to fork it first to have your own copy. This repository provides the base HTML and CSS files you’ll use to build out the JavaScript functionality.

[Click here for starter code to fork](https://github.com/HackerUSA-CE/aisd-ajs-05-Interacting-with-the-DOM)

##

## 2. **Create a Blank `index.js` File**

- [ ] Inside your cloned project folder, create a new blank file named `index.js`. This is where you will write all your JavaScript code for interacting with the DOM.

### Note: 
The `index.js` file is already linked in the `HTML` file provided at the bottom of the `<body>` tag, so any JavaScript you write will automatically run when the HTML file is loaded:

```html
<script src="index.js"></script>
```
##

## 3. **Open the index.html file in your browser**

- [ ] Open a terminal in VS Code, navigate to your project directory and use `npx serve` to start a local server and view your `index.html` file in the browser.

- [ ] Run the following command within the projects directory:

```bash
npx serve
```

### Expected Browser Display

![A simple, informative web page titled 'So You Want to Be a Software Developer.' At the top, a large header reads the main title, followed by a tagline: 'Exploring the World of Coding and Development!' The page is divided into sections. The first section, 'Languages to Learn,' lists JavaScript, Python, React, and Databases. Next is 'Why Become a Developer?' describing reasons like problem-solving and creativity. The third section, 'Developer Skills,' covers tools like Git, debugging, teamwork, and responsive design. At the bottom, the footer encourages 'Happy Coding! - From ThriveDX](./assets/images/example2.png)

##

### Step 4: Change the Main Title Color
In this step, we’ll use JavaScript to change the color of the main title by targeting it solely through its unique `id` attribute. The `getElementById` method allows us to select elements by their `id` and directly modify their properties. Here, we’ll use it to access the `<h1>` element with `id="main-title"` and change its `style.color` to a new color after a 1-second delay.


- Add the following code to `index.js`:

```javascript
  setTimeout(() => {
    const mainTitle = document.getElementById("main-title");
    mainTitle.style.color = "#ff6b6b";
  }, 1000);
```

- [ ] Refresh the browser to apply the changes.

### Expected Browser Display
![A simple, informative web page titled 'So You Want to Be a Software Developer.' At the top, the main title appears in a new color, followed by a tagline: 'Exploring the World of Coding and Development!' The page is divided into sections. The first section, 'Languages to Learn,' lists JavaScript, Python, React, and Databases. Next is 'Why Become a Developer?' describing reasons like problem-solving and creativity. The third section, 'Developer Skills,' covers tools like Git, debugging, teamwork, and responsive design. At the bottom, the footer encourages 'Happy Coding! - From ThriveDX.'](/assets/images/example3.png)

### Explanation
- **`setTimeout` Function**: This function delays the execution of the code inside it by a specified time—in this case, 1000 milliseconds (1 second).
- **Arrow Function Syntax**: Inside `setTimeout`, an arrow function `() => { ... }` is used to run the code after the delay, making the code concise and easy to read.
- **`document.getElementById("main-title")`**: This line selects the `<h1>` element with the `id` of "main-title" from the HTML document. `getElementById` is used specifically for selecting elements by their unique `id`.
- **Storing the Element in `mainTitle`**: The selected element is assigned to a constant variable called `mainTitle`, allowing us to reference this element for styling or other changes.
- **Changing the Color with `style.color`**: The `style.color` property of `mainTitle` is set to `#ff6b6b`, which applies a new color to the title text after the 1-second delay.

##




