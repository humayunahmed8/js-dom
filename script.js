console.dir(document);
console.log(document.location.href);

// Set the href attribute of the anchor element to the current document URL
const documentHref = document.location.href;
const element = document.getElementById("link");
element.href = documentHref;


