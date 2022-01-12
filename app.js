/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const DocumentFragment = document.createDocumentFragment();
function createlist() {
  for (const section of sections) {
    const listitem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = section.dataset.nav;
    link.classList.add("menu__link");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    listitem.appendChild(link);
    DocumentFragment.appendChild(listitem);
  }
  navBar.appendChild(DocumentFragment);
}
createlist();
window.addEventListener("scroll", showHighlighting);
function showHighlighting(){
  sections.forEach(section =>{
  const sectionTop = (section.getBoundingClientRect().top);
 const link = document.querySelector(`a[href="#${section.id}"]`);
  if(sectionTop >= 0 && sectionTop <= 300){
    section.classList.add("your-active-class");
    link.classList.add("active");
 }else{
    section.classList.remove("your-active-class");
    link.classList.remove("active");
 };
});
};


