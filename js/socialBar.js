// Variable initialization for HTML elements
let drop = document.getElementById("drop");

let group1 = document.getElementById("group-1");
let img1 = document.getElementById("images-1");
let label1 = document.getElementById("label-1");

let group2 = document.getElementById("group-2");
let img2 = document.getElementById("images-2");
let label2 = document.getElementById("label-2");

let group3 = document.getElementById("group-3");
let img3 = document.getElementById("images-3");
let label3 = document.getElementById("label-3");

let group4 = document.getElementById("group-4");
let img4 = document.getElementById("images-4");
let label4 = document.getElementById("label-4");

const socialWiden = group => {
    group.style.width = "260%";
    group.style.position = "relative";
    group.style.right = "122px";
    group.style.transition = "all 500ms ease-in-out";
    group.style.backgroundColor = "#595959";
};

const imgWiden = img => {
    img.style.width = "30%";
    img.style.opacity = ".85";
    img.style.transition = "all 500ms ease";
    img.style.backgroundColor = "#595959";
    img.style.left = "60px";
};

const labelDisplay = label => {
    label.style.left = "5px";
    label.style.opacity = "1";
    label.style.visibility = "visible";
    label.style.display = "block";
    label.style.fontSize = "1.5rem";
    label.style.transition = "all 500ms ease-in-out 300ms";
    label.style.borderBottom = "2px solid black";
};

const displaySocials = () => {
    return drop.style.display = "block";
}

//Media Queries for mobile devices and tablets
const checkSize = () => {

    // Media Query variables
    var v = window.matchMedia("(max-width: 600px)");
    var w = window.matchMedia("(min-width: 600px) and (max-width: 768px)");
    var x = window.matchMedia("(min-width: 768px) and (max-width: 992px)");
    var y = window.matchMedia("(min-width: 992px) and (max-width: 1200px)");
    var z = window.matchMedia("(min-width: 1200px)");

    if (v.matches) {
        //document.body.style.backgroundColor = "red";
        drop.addEventListener("mousedown", function() {displaySocials()});
    } else if (w.matches){
        //document.body.style.backgroundColor = "blue";
        drop.addEventListener("mousedown", function() {displaySocials()});
    } else if (x.matches) {
        //document.body.style.backgroundColor = "yellow";
        drop.addEventListener("mousedown", function() {displaySocials()});
    } else if (y.matches) {
        //document.body.style.backgroundColor = "green";
        fullTransform();
    } else if (z.matches) {
        //document.body.style.backgroundColor = "purple";
        fullTransform();
    }
}

// Function that resets all styles back to 
// original settings prior to modifications
const socialReturn = (group, img, label) => {
    group.style.width = "100%";
    group.style.right = "0px";
    group.style.transition = "all 500ms ease-in-out";
    group.style.backgroundColor = "#262626";
    
    img.style.width = "90%";
    img.style.opacity = "1";
    img.style.left = "0px";
    img.style.transition = "all 500ms ease-in-out";
    img.style.backgroundColor = "#262626";
  
    label.style.opacity = "0";
    label.style.left = "80px";
    label.style.visibility = "hidden";
    label.style.display = "none";
    label.style.transition = "all 500ms ease-in-out";
};

// Function that initializes all HTML elements
// by resetting them with socialReturn()
const initializeDisplays = (g1, g2, g3, g4, i1, i2, i3, i4, l1, l2, l3, l4) => {
    socialReturn(g1,i1,l1);
    socialReturn(g2,i2,l2);
    socialReturn(g3,i3,l3);
    socialReturn(g4,i4,l4);
};

// Function that calls all the modifying functions
const socialTransform = (group, img, label) => {
    socialWiden(group);
    imgWiden(img);
    labelDisplay(label);
};

// Function to add eventlisteners and call
// all the previous functions for each group
const fullTransform = () => {
        // Calling each element to be modified when the mouse enters the
        // element, then reseting when the mouse leaves the element    
        group1.addEventListener("mouseenter", function() {socialTransform(group1, img1, label1)});
        group1.addEventListener("mouseleave", function() {socialReturn(group1, img1, label1)});

        group2.addEventListener("mouseenter", function() {socialTransform(group2, img2, label2)});
        group2.addEventListener("mouseleave", function() {socialReturn(group2, img2, label2)});

        group3.addEventListener("mouseenter", function() {socialTransform(group3, img3, label3)});
        group3.addEventListener("mouseleave", function() {socialReturn(group3, img3, label3)});

        group4.addEventListener("mouseenter", function() {socialTransform(group4, img4, label4)});
        group4.addEventListener("mouseleave", function() {socialReturn(group4, img4, label4)});
}

// Call to initialize all elements when the mouse enters
// the dropdown icon
drop.addEventListener("mouseenter", initializeDisplays(group1, group2, group3, group4, 
    img1, img2, img3, img4, label1, label2, label3, label4,));

// check the media query and apply the 
// correct modifiers to the socials bar 
checkSize();
