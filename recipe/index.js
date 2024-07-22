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


// ******* ADD CHECKBOXES AFTER EACH li IN THE OLs *******

