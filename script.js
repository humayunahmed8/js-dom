// Creating an element
const divElement = document.createElement("div");
divElement.className = "red";
divElement.setAttribute("title", "red");
divElement.textContent = "This is heading";
const container = document.querySelector("#list-items");
container.appendChild(divElement);
// container.append(divElement, document.createElement("p"), "Hello World!");


