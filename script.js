// Get all elements with the class "item"
const items = document.getElementsByClassName("item");

// Log each element with the class "item"
for (x of items) {
  console.log(x);
}

// Loop through each element and apply red text color
for (let i=0; i<items.length; i++) {
  items[i].style.color = 'red';
}


