// Select the next sibling of the element with class "item" and change its color to red
// Select the previous sibling of the next sibling and change its color to green
const childrenTwo = document.querySelector(".item").nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;
childrenTwo.style.color = "red";
childrenOne.style.color = "green";


