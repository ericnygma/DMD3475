/**
 * Use this javascript file to fix the page design and layout. 
 * Reference the index.html comments for complete details.
 */

//Variables
var body = document.body.style;
var allDivs = document.querySelectorAll("div");
var firstDiv = allDivs[0];
var aside = document.querySelector("aside");


// 1) Add CSS Properties to the body tag
body.fontFamily = "Trebuchet MS";
body.fontStyle = "sans-serif";
body.fontSize = "10px/14px";
body.color = "#000033";
body.background = "#69f";
body.margin = "0px";

// 2) Add the .page-wrapper class
firstDiv.setAttribute("class", "page-wrapper");

// 3) Add the .summary class
allDivs[1].classList.add("summary");

// 4) Add the .sidebar class
aside.classList.add("sidebar");

// 5) Add these links to the "Resources" <ul>
let resources = [
    {
        title: "View the source CSS file of the currently-viewed design.",
        href: "css/style.css",
        innerHTML: "View This Design&#8217;s <abbr title=\"Cascading Style Sheets\">CSS</abbr>"
    },
    {
        title: "Links to great sites with information on using CSS.",
        href: "http://www.mezzoblue.com/zengarden/resources/",
        innerHTML: "<abbr title=\"Cascading Style Sheets\">CSS</abbr> Resources "
    },
    {
        title: "A list of Frequently Asked Questions about the Zen Garden.",
        href: "http://www.mezzoblue.com/zengarden/faq/",
        innerHTML: "<abbr title=\"Frequently Asked Questions\">FAQ</abbr> "
    },   
    {
        title: "Send in your own CSS file.",
        href: "http://www.mezzoblue.com/zengarden/submit/",
        innerHTML: "Submit a Design"
    },
    {
        title: "View translated versions of this page.",
        href: "http://www.mezzoblue.com/zengarden/translations/",
        innerHTML: "Translations"
    },
];
resources.forEach(function(resources) {
    var uList = document.querySelector("#resourceList");
    var listItem = document.createElement('li');
    uList.appendChild(listItem);
    var link = document.createElement("a"); 
    link.innerHTML = resources.innerHTML;
    link.setAttribute("href", resources.href);
    listItem.appendChild(link);

})

/* forLoop works, convert to forEach above.
for( var i = 0; i < resources.length; i++){
    var uList = document.querySelector("#resourceList");
    var listItem = document.createElement('li');
    uList.appendChild(listItem)
    var link = document.createElement("a"); 
    link.innerHTML = resources[i].innerHTML;
    link.setAttribute("href", resources[i].href);
    listItem.appendChild(link);
} */





