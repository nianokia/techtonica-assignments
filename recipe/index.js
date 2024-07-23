// DOM manipulation
/* Objectives
    - footer appears when user scrolls down
    - footer disappears when user scrolls up
    - modify opacity when user hovers over links
    - add checkboxes after li with class ingriedients
*/

// ******* MODIFY OPACITY WHEN USER HOVERS OVER LINKS *******

const allLinks = document.getElementsByClassName("hoveredLink");
for (let i = 0; i < allLinks.length; i++) {
    // run when user hovers over
    allLinks[i].addEventListener("mouseover", function() {
    allLinks[i].style.opacity = "60%";
}, false);
    // run when user stops hovering over
    allLinks[i].addEventListener("mouseout", function() {
    allLinks[i].style.opacity = "100%";
}, false);
}

// ******* FOOTER APPEARS AND DISAPPEARS WHEN USER SCROLLS *******

const footer = document.querySelector("footer");

// footer.addEventListener("scroll", function() {
//     footer.style.display = "contents";
// }, false);
// footer.addEventListener("scrollend", function() {
//     footer.style.display = "none";
// }, false);


// (window).scroll(function() {
//    if((window).scrollTop() + (window).height() == (document).height()) {
//        alert("bottom!");
//    }
// });

// document.getElementById('box').addEventListener(
//     'scroll',
//     function()
//     {
//         var scrollTop = document.getElementById('box').scrollTop;
//         var scrollHeight = document.getElementById('box').scrollHeight; // added
//         var offsetHeight = document.getElementById('box').offsetHeight;
//         // var clientHeight = document.getElementById('box').clientHeight;
//         var contentHeight = scrollHeight - offsetHeight; // added
//         if (contentHeight <= scrollTop) // modified
//         {
//             // Now this is called when scroll end!
//         }
//     },
//     false
// )

// document.getElementsByClassName("bodyContainer").addEventListener("scroll", function() {
//     let scrollTop = document.getElementsByClassName("bodyContainer").scrollTop;
//     let scrollHeight = document.getElementsByClassName("bodyContainer").scrollHeight;
//     let offsetHeight = document.getElementsByClassName("bodyContainer").offsetHeight;
//     let contentHeight = scrollHeight - offsetHeight;
//     if (contentHeight <= scrollTop) {
//         alert("hello");
//     }
// }, false);


// ******* ADD CHECKBOX INPUT BEFORE EACH li IN THE INGREDIENTS DIV  *******

// select & store ingredients div in list
const list = document.getElementById("ingredients");

// create array of ingredient list
let ingredientList = ["3 Eggs", "1/4 Cup of Milk", "Generous Sprinkle of Ground Cinnamon", "4 Slices of Bread", "1/3 Stick of Butter"];

// iterate through ingredientList to append input and labels
ingredientList.forEach(ingredient => {
    // create an ol to append iterated content
    let holder = document.createElement("ul");

    // select and store checkbox input in variable checkbox
    let checkbox = document.createElement("input");

    // declare and define properties of the input checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = ingredient;

    // create label and assign it same id as checkbox
    let label = document.createElement("label");
    label.htmlFor = ingredient;

    label.appendChild(document.createTextNode(ingredient));

    // append checkbox & label to ol, then append that to the div "list"
    holder.appendChild(checkbox);
    holder.appendChild(label);
    list.appendChild(holder);

    // change styling to match the rest of the page
    holder.style.color = "#F9F9F9";
    holder.style.fontFamily = "'Sarala', sans-serif";
    list.style.border = "5px dashed #F9F9F9";
    list.style.borderRadius = "30px";
    list.style.backgroundColor = "#46537C";
    holder.style.margin = "12px 0px 12px 110px";
});

