// Get the element with the ID "heading"
const element = document.getElementById("heading");

// Get the innerText of the element
// innerText respects the CSS styles and won't include hidden text
const innerText = element.innerText;
console.log(innerText);

// Get the textContent of the element
// textContent includes all text within the element, regardless of CSS styles
const textContent = element.textContent;
console.log(textContent);

