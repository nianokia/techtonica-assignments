// DOM manipulation
/* Objectives
    - footer appears when user scrolls down
    - footer disappears when user scrolls up
    - modify opacity when user hovers over links
    - add checkboxes after li with class steps
*/

// const myListItem = document.getElementsByClassName("step");
// const desc = document.getElementById("description");

// let checkbox = document.createElement("input");

// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "check";

// myListItem.innerHTML = "HELLO";
// desc.append(checkbox);

// const allLinks = document.getElementsByClassName("hoveredLink");
// allLinks.addEventListener("hover", function() {
//     document.a.style.color = "red";
// });

const listItem1 = document.getElementById("hoveredLink1");
listItem1.addEventListener("mouseover", function() {
    listItem1.style.opacity = "60%";
}, false);
listItem1.addEventListener("mouseout", function() {
    listItem1.style.opacity = "100%";
}, false)

const listItem2 = document.getElementById("hoveredLink2");
listItem2.addEventListener("mouseover", function() {
    listItem2.style.opacity = "60%";
}, false);
listItem2.addEventListener("mouseout", function() {
    listItem2.style.opacity = "100%";
}, false)

const listItem3 = document.getElementById("hoveredLink3");
listItem3.addEventListener("mouseover", function() {
    listItem3.style.opacity = "60%";
}, false);
listItem3.addEventListener("mouseout", function() {
        listItem3.style.opacity = "100%";
}, false)
