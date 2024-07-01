// Parent Child Relation 
const grandparent = document.querySelector(".list-item");
// const parent = grandparent.children;
// const children = parent[1].children;
const children = grandparent.querySelectorAll(".item");

console.log(children);

