// DOM manipulation
/* Objectives
    - modify opacity when user hovers over links
    - footer border appears & disappears when user hovers over
    - create list of ingredients with checkbox bullet points
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


// ******* FOOTER BORDER APPEARS AND DISAPPEARS WHEN USER SCROLLS *******

const footer = document.querySelector(".footerContainer");

footer.addEventListener("mouseover", () => {
    footer.style.border = "3px dashed #46537C";
    footer.style.backgroundColor = "#ededed"
    footer.style.borderRadius = "12px";
}, false);
footer.addEventListener("mouseout", () => {
    footer.style.border = "none";
    footer.style.backgroundColor = "#f9f9f9"
}, false);


// ******* CREATE LIST OF INGREDIENTS WITH CHECKBOX BULLET POINTS  *******

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

    checkbox.style.marginRight = "25px";
    checkbox.style.display = "inline";
    label.style.display = "inline";

    // append checkbox & label to ol, then append that to the div "list"
    holder.appendChild(checkbox);
    holder.appendChild(label);
    list.appendChild(holder);

    // change styling to match the rest of the page
    holder.style.margin = "15px 0px";
    holder.style.fontFamily = "'Sarala', sans-serif";
    holder.style.fontSize = "1.25em"
    holder.style.color = "#F9F9F9";   

    list.style.marginTop = "30px"
    list.style.marginBottom = "30px";
    list.style.border = "5px dashed #F9F9F9";
    list.style.borderRadius = "30px";
    list.style.backgroundColor = "#46537C";
});