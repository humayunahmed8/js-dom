console.dir(document);
console.log(document.location.href);

// Set the href attribute of the anchor element to the current document URL
const documentHref = document.location.href;
const element = document.getElementById("link");
element.href = documentHref;

// Log all elements in the document and iterate over them, logging each one
console.log(document.all);

for (x of document.all) {
  console.log(x);
}


