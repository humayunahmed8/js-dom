// Set font weight to bold for element with ID 'heading'.
const heading = document.querySelector("#heading");
heading.style.fontWeight = 'bold';

// Set text color to green for all elements with class 'item'
const item = document.querySelectorAll(".item");

for(let i of item) {
  i.style.color = 'green';
}

// Set text color to red for the last child element with class 'item'."
const lastItem = document.querySelectorAll(".item:last-child");

for(let item of lastItem) {
  item.style.color = 'red';
}

