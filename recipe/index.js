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

// MODIFY OPACITY WHEN USER HOVERS OVER LINKS

// const allLinks = document.getElementsByClassName("hoveredLink");
// allLinks.addEventListener("mouseover", function() {
//     allLinks.style.opacity = "60%";
// });

const linkItem1 = document.getElementById("hoveredLink1");
linkItem1.addEventListener("mouseover", function() {
    linkItem1.style.opacity = "60%";
}, false);
linkItem1.addEventListener("mouseout", function() {
    linkItem1.style.opacity = "100%";
}, false)

const linkItem2 = document.getElementById("hoveredLink2");
linkItem2.addEventListener("mouseover", function() {
    linkItem2.style.opacity = "60%";
}, false);
linkItem2.addEventListener("mouseout", function() {
    linkItem2.style.opacity = "100%";
}, false)

const linkItem3 = document.getElementById("hoveredLink3");
linkItem3.addEventListener("mouseover", function() {
    linkItem3.style.opacity = "60%";
}, false);
linkItem3.addEventListener("mouseout", function() {
        linkItem3.style.opacity = "100%";
}, false)
