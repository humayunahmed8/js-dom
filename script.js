// Get the element with the ID "list"
const itemContainer = document.getElementById("list");

// Get all elements with the class "item" within the "list" container
const items = itemContainer.getElementsByClassName("item");

// Log each element with the class "item"
for (x of items) {
  console.log(x);
}

// Loop through each "item" element and apply red text color
for (let i = 0; i < items.length; i++) {
  // Set the text color of each element to red
  items[i].style.color = 'red';
}


